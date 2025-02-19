'use client';
import React, { useState } from "react";

function LoginPage() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Track OTP sent state
  const [otp, setOtp] = useState(Array(6).fill("")); // OTP input state
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number input state

  // Handle OTP input
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  // Handle sending OTP
  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      setOtpSent(true); // OTP is sent
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = () => {
    const correctOtp = "123456"; // Predefined OTP
    if (otp.join("") === correctOtp) {
      alert("OTP Verified!");
    } else {
      alert("Incorrect OTP. Try again.");
    }
  };

  return (
    <div className="login-page">
      {/* Show Login Form or Forgot Password Form */}
      {!isForgotPassword ? (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <p onClick={() => setIsForgotPassword(true)}>Forgot Password?</p>
        </div>
      ) : (
        <div className="reset-password-form">
          <h2>Reset Password</h2>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {/* Button to send OTP or confirm OTP */}
          {!otpSent ? (
            <button onClick={handleSendOtp}>Send OTP</button>
          ) : (
            <button onClick={handleVerifyOtp}>Confirm OTP</button>
          )}

          {/* OTP Input Fields */}
          {otpSent && (
            <div className="otp-inputs">
              <h3>Enter OTP</h3>
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    className="otp-input"
                  />
                ))}
              </div>
            </div>
          )}

          <p onClick={() => setIsForgotPassword(false)}>Back to Login</p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
