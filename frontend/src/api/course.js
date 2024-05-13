import { courseApi } from '.';

export const createCourseAPIWrapper = async ({
  crsname,
  description,
  price,
}) => {
  return await courseApi.post('/course/add', { crsname, description, price });
};

export const getCourseAPIWrapper = async (courseId) => {
  return await courseApi.get(`/course/course/${courseId}`);
};

export const getAllCourseAPIWrapper = async () => {
  return await courseApi.get(`/course`);
};

export const deleteCourseByIdAPIWrapper = async (courseId) => {
  return await courseApi.delete(`/course/delete/${courseId}`);
};

export const deleteVideoByIdAPIWrapper = async (courseId, videoId) => {
  return await courseApi.delete(`/content/video/delete/${courseId}/${videoId}`);
};



export const editCourseAPIWrapper = async ({
  courseId,
  crsname,
  description,
  price,
}) => {
  return await courseApi.put(`/course/update/${courseId}`, {
    crsname,
    description,
    price,
  });
};

export const reviewCourseAPIWrapper = async (courseId, payload) => {
  return await courseApi.patch(`/course/patch/${courseId}`, payload);
};
