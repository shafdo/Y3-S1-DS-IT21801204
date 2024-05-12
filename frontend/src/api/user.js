import { userApi } from '.';

export const createUserAPIWrapper = async ({
  fname,
  username,
  email,
  password,
  role,
}) => {
  return await userApi.post('/user', {
    fname,
    username,
    email,
    password,
    role,
  });
};
