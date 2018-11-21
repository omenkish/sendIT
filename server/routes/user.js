import express from 'express';
const router = express.Router();

import User from '../controllers/User';
import Auth from '../middleware/authMiddleware';
import UserValidator from '../middleware/validateUser';


router.route('/auth/signup')
.post(UserValidator.createUser, User.createUser);

export default router;