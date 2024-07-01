import { Request, Response } from 'express';
import User from '../models/userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '30d' });
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id)
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

export const authUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id)
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
