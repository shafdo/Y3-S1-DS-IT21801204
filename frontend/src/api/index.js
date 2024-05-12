import axios from 'axios';

export const courseApi = axios.create({
  baseURL: import.meta.env.VITE_COURSE_API_URL,
  withCredentials: true,
});

export const userApi = axios.create({
  baseURL: import.meta.env.VITE_USER_API_URL,
  withCredentials: true,
});
