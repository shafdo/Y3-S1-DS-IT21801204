import { courseApi } from '.';

export const createCourseAPIWrapper = async ({
  crsname,
  description,
  price,
}) => {
  return await courseApi.post('/course/add', { crsname, description, price });
};
