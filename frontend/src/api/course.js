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
