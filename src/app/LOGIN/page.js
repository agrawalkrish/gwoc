'use client';
import { useState, useRef } from 'react';
import { Phone, Lock, ArrowRight } from 'lucide-react';
import { LoginComp } from '../components/LoginComp';
export default function LoginPage() {
  const [step, setStep] = useState('login'); // 'login', 'enter-phone', 'enter-otp', 'enter-new-password', 'verified'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [otp, setOTP] = useState(new Array(6).fill(''));
  const [otpError, setOtpError] = useState(null);
  const [otpError1, setOtpError1] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const otpInputs = useRef([]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, password }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setStep('enter-otp');
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (otp.join('') === '123456') {
      setOtpError1('Successfully Verified');
      setStep('enter-new-password'); // Move to the new password step
    } else {
      setOtpError('Incorrect OTP');
    }
  };

  const handleOTPChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Allow only numbers

    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value !== '' && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Validate new password and confirm new password
    if (newPassword !== confirmNewPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, newPassword }),
      });

      if (response.ok) {
        setStep('verified'); // Move to the verified step
      } else {
        console.error('Failed to reset password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <LoginComp/>
    </div>
  );
}