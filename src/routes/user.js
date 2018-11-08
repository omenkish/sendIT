import express from 'express';
const router = express.Router();

import User from '../controllers/user';

router.post('', User.create);
router.get('/:id/parcels', User.getUserParcels);
router.get('', User.getUsers);
router.get('/:id', User.getUser);

export default router;