import bcrypt from 'bcryptjs';

export const hashText = (plainText: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plainText, salt);
};
