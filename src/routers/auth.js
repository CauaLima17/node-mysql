import express from 'express';
import AuthController from '../controllers/AuthController.js';

const AuthRouter = express.Router();

AuthRouter.post('/register', AuthController.register)

export default AuthRouter;