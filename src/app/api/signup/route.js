// pages/api/auth/signup.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '../../utils/db';
import User from '../../models/user';

const signUp = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, phone, password, confirmPassword, gender } = req.body;

  // Connect to DB
  await connectDB();

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      gender,
    });

    await newUser.save();

    // Create JWT token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default signUp;
