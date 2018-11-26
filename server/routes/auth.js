import express from 'express';
const router = express.Router();

import User from '../controllers/User';
import Validator from '../middleware/validate';

router.route('/auth/signup')
.post(Validator.createUser, User.createUser);

router.route('/auth/login')
.post(Validator.login, User.login);

export default router;