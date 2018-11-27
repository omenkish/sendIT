import express from 'express';
const router = express.Router();

import User from '../controllers/User';
import Parcel from '../controllers/Parcel'
import Auth from '../middleware/authMiddleware';
import Validator from '../middleware/validate';

router.route('/:id/parcels')
.get(Auth, Parcel.getUserParcels);

router.get('/user', Auth, Validator.adminOnly, User.getUsers)
export default router;