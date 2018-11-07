import express from 'express';
const router = express.Router();

import User from '../controllers/user';

router.post('', User.create);

export default router;