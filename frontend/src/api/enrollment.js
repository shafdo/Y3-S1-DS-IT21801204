import { enrollmentApi } from '.';

export const addEnrollmentAPIWrapper = async (userId, courseId) => {
    try {
      const response = await enrollmentApi.post(`/${courseId}/${userId}/add`);
      return response.data; 
    } catch (error) {
      throw error; 
    }
};

export const checkEnrollmentAPIWrapper = async (userId, courseId) => {
    try {
      const response = await enrollmentApi.get(`/${courseId}/${userId}`);
      return response.data.enrolled;
    } catch (error) {
      throw error; 
    }
};

// Delete a single course enrollment for a user
export const deleteCourseEnrollmentAPIWrapper = async (courseId, userId) => {
    try {
      const response = await enrollmentApi.delete(`/${courseId}/${userId}`);
      return response.data.message; 
    } catch (error) {
      throw error;
    }
};

// Delete all enrollments for a single user
export const deleteEnrollmentAPIWrapper = async (userId) => {
    try {
      const response = await enrollmentApi.delete(`/${userId}`);
      return response.data.message; 
    } catch (error) {
      throw error; 
    }
};

// Delete all enrollments for a course
export const deleteCourseInEnrollmentsAPIWrapper = async (courseId) => {
    try {
      const response = await enrollmentApi.delete(`/remove/course/${courseId}`);
      return response.data.message; 
    } catch (error) {
      throw error; 
    }
};
