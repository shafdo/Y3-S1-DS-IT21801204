import bcrypt from 'bcryptjs';

export const hashText = (plainText: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plainText, salt);
};

export const compareHash = (hash: string, secret: string) => {
  return bcrypt.compareSync(secret, hash);
};
