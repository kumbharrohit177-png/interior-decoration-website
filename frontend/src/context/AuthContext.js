import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    const token = localStorage.getItem('accessToken');
    
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.get('/api/auth/me');
      setUser(response.data.data);
    } catch (error) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      delete axios.defaults.headers.common['Authorization'];
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password
      });

      const { accessToken, refreshToken, user: userData } = response.data;
      
      // Store tokens
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      
      // Set default auth header
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      
      setUser(userData);
      setError(null);
      return { success: true };
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      return { success: false, error: error.response?.data?.message };
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('/api/auth/register', userData);
      return { success: true, data: response.data };
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
      return { success: false, error: error.response?.data?.message };
    }
  };

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        await axios.post('/api/auth/logout', { refreshToken });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear storage and state
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      delete axios.defaults.headers.common['Authorization'];
      setUser(null);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await axios.put('/api/auth/update-profile', profileData);
      setUser(response.data.data);
      return { success: true, data: response.data };
    } catch (error) {
      setError(error.response?.data?.message || 'Update failed');
      return { success: false, error: error.response?.data?.message };
    }
  };

  const updatePassword = async (passwordData) => {
    try {
      const response = await axios.put('/api/auth/update-password', passwordData);
      return { success: true, data: response.data };
    } catch (error) {
      setError(error.response?.data?.message || 'Password update failed');
      return { success: false, error: error.response?.data?.message };
    }
  };

  const uploadAvatar = async (file) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      
      const response = await axios.put('/api/auth/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setUser(response.data.data);
      return { success: true, data: response.data };
    } catch (error) {
      setError(error.response?.data?.message || 'Avatar upload failed');
      return { success: false, error: error.response?.data?.message };
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await axios.post('/api/auth/forgot-password', { email });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.message };
    }
  };

  const resetPassword = async (token, password) => {
    try {
      const response = await axios.put(`/api/auth/reset-password/${token}`, { password });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.message };
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
    updatePassword,
    uploadAvatar,
    forgotPassword,
    resetPassword,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin' || user?.role === 'super_admin',
    isDesigner: user?.role === 'designer',
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};