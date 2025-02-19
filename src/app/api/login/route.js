// pages/api/auth/signin.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '../../utils/db';
import User from '../../models/user';

const signIn = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  // Connect to DB
  await connectDB();

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default signIn;
