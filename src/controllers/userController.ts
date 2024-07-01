import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel';

// Extend the Request interface to include the user property
interface AuthenticatedRequest extends Request {
  user?: any;
}

const registerUser = async (req: Request, res: Response) => {
  // Registration logic
};

const loginUser = async (req: Request, res: Response) => {
  // Login logic
};

const getUserProfile = async (req: AuthenticatedRequest, res: Response) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

export { registerUser, loginUser, getUserProfile };