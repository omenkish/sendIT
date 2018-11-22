import express from 'express';
const router = express.Router();

import User from '../controllers/User';
import Prcel from '../controllers/Parcel'
import Auth from '../middleware/authMiddleware';
import Validator from '../middleware/validate';
import Parcel from '../controllers/Parcel';

router.route('/auth/signup')
.post(Validator.createUser, User.createUser);

router.route('/auth/login')
.post(Validator.login, User.login);

router.route('/:id/parcels')
.get(Auth, Parcel.getAllParcels);
export default router;