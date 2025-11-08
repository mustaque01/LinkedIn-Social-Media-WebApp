import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
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

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (userData) => api.post('/auth/login', userData),
  getMe: () => api.get('/auth/me'),
};

// Posts API
export const postsAPI = {
  getAllPosts: () => api.get('/posts'),
  getPost: (id) => api.get(`/posts/${id}`),
  createPost: (postData) => api.post('/posts', postData),
  updatePost: (id, postData) => api.put(`/posts/${id}`, postData),
  deletePost: (id) => api.delete(`/posts/${id}`),
  likePost: (id) => api.put(`/posts/${id}/like`),
  addComment: (id, commentData) => api.post(`/posts/${id}/comment`, commentData),
  deleteComment: (postId, commentId) => api.delete(`/posts/${postId}/comment/${commentId}`),
  getUserPosts: (userId) => api.get(`/posts/user/${userId}`),
};

// Users API
export const usersAPI = {
  getAllUsers: () => api.get('/users'),
  getUserProfile: (id) => api.get(`/users/${id}`),
  updateProfile: (profileData) => api.put('/users/profile', profileData),
};

export default api;
