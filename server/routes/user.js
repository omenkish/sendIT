import express from 'express';
const router = express.Router();

import User from '../controllers/user';

router.post('/', User.create());
router.get('/:id/parcels', User.getUserParcels());
router.get('/', User.getUsers());
router.get('/:id', User.getUser());
router.put('/:id/cancel', User.delete());
router.put('/:id', User.update())

export default router;