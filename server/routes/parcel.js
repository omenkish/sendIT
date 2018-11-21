import express from 'express';
const router = express.Router();

import Parcel from '../controllers/Parcel';
import auth from '../middleware/authMiddleware';
import validate from '../middleware/validate';

router.route('/')
.post(validate.createParcel, Parcel.createParcelOrder)

export default router;