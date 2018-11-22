import express from 'express';
const router = express.Router();

import Parcel from '../controllers/Parcel';
import Auth from '../middleware/authMiddleware';
import validate from '../middleware/validate';

router.route('/')
.post(Auth, validate.createParcel, Parcel.createParcelOrder);

export default router;