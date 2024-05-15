import { enrollmentApi } from '.';

export const addEnrollmentAPIWrapper = async ( courseId) => {
    try {
      const response = await enrollmentApi.post(`/${courseId}`);
      return response.data; 
    } catch (error) {
      throw error; 
    }
};

export const checkEnrollmentAPIWrapper = async (courseId) => {
    try {
      const response = await enrollmentApi.get(`/${courseId}`);
      return response.data.enrolled;
    } catch (error) {
      throw error; 
    }
};

// Delete a single course enrollment for a user
export const deleteCourseEnrollmentAPIWrapper = async (courseId) => {
    try {
      const response = await enrollmentApi.delete(`/${courseId}/remove`);
      return response.data.message; 
    } catch (error) {
      throw error;
    }
};

// Delete all enrollments for a single user
export const deleteEnrollmentAPIWrapper = async () => {
    try {
      const response = await enrollmentApi.delete(`/`);
      return response.data.message; 
    } catch (error) {
      throw error; 
    }
};

// Delete all enrollments for a course
export const deleteCourseInEnrollmentsAPIWrapper = async (courseId) => {
    try {
      const response = await enrollmentApi.delete(`/${courseId}`);
      return response.data.message; 
    } catch (error) {
      throw error; 
    }
};
