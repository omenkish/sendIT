import express from 'express';
const router = express.Router();

import User from '../controllers/User';
import Parcel from '../controllers/Parcel'
import Auth from '../middleware/authMiddleware';
import Validator from '../middleware/validate';

router.route('/:id/parcels')
.get(Auth, Parcel.getUserParcels);

router.get('/',Auth, Validator.adminOnly, User.getUsers);
router.get('/:id', Auth, Validator.adminOnly, Validator.getById, User.getUser)
router.get('/:id/createadmin',Auth,Validator.adminOnly,Validator.getById, User.makeAdmin);
export default router;