import express from 'express';
const router = express.Router();

import Parcel from '../controllers/Parcel';
import Auth from '../middleware/authMiddleware';
import validate from '../middleware/validate';

router.route('/')
.all(Auth)
.post(validate.createParcel, Parcel.createParcelOrder)
.get(validate.adminOnly, Parcel.getAllParcels)

export default router;