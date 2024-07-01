import { Router } from 'express';
import { registerUser, authUser, getUserProfile } from '../controllers/userController';
import { protect, admin } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);

export default router;
