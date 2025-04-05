import axios from 'axios';

const API = axios.create({
  baseURL: 'http://blog-backend-new-1.onrender.com',
  withCredentials: true, // ✅ required for auth headers and cookies
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
