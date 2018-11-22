import express from 'express';
const router = express.Router();

import User from '../controllers/User';
import Auth from '../middleware/authMiddleware';
import Validator from '../middleware/validateUser';

router.route('/auth/signup')
.post(Validator.createUser, User.createUser);
export default router;