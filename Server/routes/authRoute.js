const express = require('express');
const { userRegister } = require('../controllers/authController');

const authRouter = express.Router();

// router.get('/', hello);
// router.get('/lol', lol);

authRouter.post('/userRegister', userRegister)

module.exports = authRouter;