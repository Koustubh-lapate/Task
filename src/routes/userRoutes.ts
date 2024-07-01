import express from 'express';
import { registerUser, authUser, getUserProfile } from '../controllers/userController';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.get('/admin', protect, admin, (req, res) => res.send('Admin route'));

export default router;
