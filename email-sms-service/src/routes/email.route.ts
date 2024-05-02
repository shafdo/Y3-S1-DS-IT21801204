import express from 'express';

const emailRouter = express.Router();

// Route definitions
emailRouter.get('/', (req, res) => {
  return res.json({
    status: 200,
    msg: 'Email api running.',
  });
});
// Route definitions end

export default emailRouter;
