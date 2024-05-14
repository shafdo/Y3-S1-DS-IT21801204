const jwt = require('jsonwebtoken');

const jwtDecode = (token) => {
  if (!token) return 0;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return 0;
  }
};

module.exports = jwtDecode;
