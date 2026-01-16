import axios from 'axios';

// Prefer VITE_API_URL if defined (production), else use relative '/api' (dev proxy)
const baseURL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/$/, '') : '';

const api = axios.create({
  baseURL: baseURL || '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
