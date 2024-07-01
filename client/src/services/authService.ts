import api from './api';

export const register = async (userData: { name: string, email: string, password: string }) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

export const login = async (userData: { email: string, password: string }) => {
  const response = await api.post('/users/login', userData);
  return response.data;
};

export const getProfile = async (token: string) => {
  const response = await api.get('/users/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};
