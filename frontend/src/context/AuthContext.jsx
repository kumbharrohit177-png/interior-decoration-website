import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Configure axios defaults
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

axios.defaults.baseURL = API_URL;

// Set up axios interceptor to add token to requests
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Set up axios interceptor to handle token refresh
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Only handle 401 errors and avoid infinite loops
    if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== '/auth/refresh-token') {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axios.post('/auth/refresh-token', {
            refreshToken
          });

          if (response.data && response.data.data && response.data.data.token) {
            const { token } = response.data.data;
            localStorage.setItem('token', token);
            originalRequest.headers.Authorization = `Bearer ${token}`;

            return axios(originalRequest);
          }
        }
      } catch (refreshError) {
        // Refresh failed, logout user silently
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        // Don't redirect if we're already on login/register page
        if (!window.location.pathname.includes('/login') && !window.location.pathname.includes('/register')) {
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (token && storedUser) {
          try {
            // Verify token by fetching user data
            const response = await axios.get('/auth/me', {
              timeout: 5000 // 5 second timeout
            });
            if (response.data && response.data.data && response.data.data.user) {
              setUser(response.data.data.user);
              localStorage.setItem('user', JSON.stringify(response.data.data.user));
            }
          } catch (err) {
            // Token invalid or backend not available, clear storage silently
            if (err.code !== 'ECONNABORTED' && err.code !== 'ERR_NETWORK') {
              console.log('Auth check failed:', err.message);
            }
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // Register user
  const register = async (userData) => {
    try {
      setError(null);
      const response = await axios.post('/auth/register', userData);
      const { token, refreshToken, user: newUser } = response.data.data;

      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);

      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed';
      setError(errorMessage);
      return { success: false, error: errorMessage, errors: err.response?.data?.errors };
    }
  };

  // Login user
  const login = async (email, password) => {
    try {
      setError(null);
      const response = await axios.post('/auth/login', { email, password });
      const { token, refreshToken, user: loggedInUser } = response.data.data;

      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      setUser(loggedInUser);

      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Logout user
  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        await axios.post('/auth/logout', { refreshToken });
      }
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      setUser(null);
    }
  };

  // Update user profile
  const updateProfile = async (profileData) => {
    try {
      setError(null);
      const response = await axios.put('/auth/update-profile', profileData);
      const updatedUser = response.data.data.user;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Profile update failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Update password
  const updatePassword = async (currentPassword, newPassword) => {
    try {
      setError(null);
      const response = await axios.put('/auth/update-password', {
        currentPassword,
        newPassword
      });
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Password update failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Upload avatar
  const uploadAvatar = async (file) => {
    try {
      setError(null);
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await axios.put('/auth/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const updatedUser = { ...user, avatar: response.data.data.avatar };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Avatar upload failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Get current user
  const getMe = async () => {
    try {
      const response = await axios.get('/auth/me');
      const updatedUser = response.data.data.user;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch user data';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    updateProfile,
    updatePassword,
    uploadAvatar,
    getMe,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
