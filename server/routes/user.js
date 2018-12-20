import express from 'express';
const router = express.Router();

import User from '../controllers/User';
import Parcel from '../controllers/Parcel'
import Auth from '../middleware/authMiddleware';
import Validator from '../middleware/validate';

router.route('/:id/parcels')
.get(Auth, Validator.adminOnly, Validator.getById, Parcel.getUserParcels);
router.route('/parcels')
.get(Auth, Parcel.getMyParcels);

router.get('/parcels/:id', Auth, Parcel.getUserParcelById)
router.get('/',Auth, Validator.adminOnly, User.getUsers);
router.get('/:id', Auth,  Validator.getById, User.getUser)
router.put('/:id/createadmin',Auth,Validator.adminOnly,Validator.getById, User.makeAdmin);
export default router;