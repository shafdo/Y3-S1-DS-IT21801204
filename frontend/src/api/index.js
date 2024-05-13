import axios from 'axios';

export const courseApi = axios.create({
  baseURL: import.meta.env.VITE_COURSE_API_URL,
  withCredentials: true,
});

export const enrollmentApi = axios.create({
  baseURL: import.meta.env.VITE_ENROLLMENT_API_URL, 
  withCredentials: true, 
});