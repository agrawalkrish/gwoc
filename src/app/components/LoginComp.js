import React from "react";
import { useState, useRef } from "react";
import { Phone, Lock, ArrowRight } from 'lucide-react';

export const LoginComp = () => {
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
    return(
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {step === 'login' && (
          <>
            <h1 className="text-2xl font-bold text-black mb-6 text-center">Welcome Back</h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                Login <ArrowRight size={20} />
              </button>
              <button
                type="button"
                onClick={() => setStep('enter-phone')}
                className="w-full text-sm text-black hover:text-gray-700 transition-colors"
              >
                Forgot Password?
              </button>
            </form>
          </>
        )}

        {step === 'enter-phone' && (
          <>
            <h1 className="text-2xl font-bold text-black mb-6 text-center">Reset Password</h1>
            <form onSubmit={handleSendOTP} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get OTP
              </button>
            </form>
          </>
        )}

        {step === 'enter-otp' && (
          <>
            <h1 className="text-2xl font-bold text-black mb-6 text-center">Enter OTP</h1>
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div className="flex gap-2 justify-center">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpInputs.current[i] = el)}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 text-black text-center border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                    value={digit}
                    onChange={(e) => handleOTPChange(i, e.target.value)}
                    onKeyDown={(e) => handleBackspace(i, e)}
                  />
                ))}
              </div>
              {otpError && <p className="text-red-500 text-center">{otpError}</p>}
              {otpError1 && <p className="text-green-500 text-center">{otpError1}</p>}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Verify OTP
              </button>
            </form>
          </>
        )}

        {step === 'enter-new-password' && (
          <>
            <h1 className="text-2xl font-bold text-black mb-6 text-center">Set New Password</h1>
            <form onSubmit={handleResetPassword} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                  placeholder="Confirm new password"
                  required
                />
              </div>
              {passwordError && <p className="text-red-500 text-center">{passwordError}</p>}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Reset Password
              </button>
            </form>
          </>
        )}

        {step === 'verified' && (
          <>
            <h1 className="text-2xl font-bold text-green-600 mb-6 text-center">Password Reset Successful</h1>
          </>
        )}
      </div>
    )
}