'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function VerificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Get phone number from URL params
  const phoneNumber = searchParams.get('Email') || 'example@gmail.com';

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    // Start countdown timer
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value !== '' && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    try {
      const response = await fetch('/api/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        setTimer(30);
        setCanResend(false);
      } else {
        console.error('Failed to resend OTP');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          otp: otp.join(''),
        }),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        console.error('Invalid OTP');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Header */}
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Sign Up
        </button>

        <h2 className="text-3xl font-bold text-black text-center mb-2">Verify Your Phone</h2>
        <p className="text-center text-gray-600 mb-8">
          We've sent a 6-digit code to<br />
          <span className="font-medium text-black">{phoneNumber}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* OTP Input */}
          <div>
            <label className="block text-sm text-black font-medium mb-4 text-center">
              Enter verification code
            </label>
            <div className="flex gap-2 justify-between mb-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-black text-xl font-medium border border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black"
                />
              ))}
            </div>
          </div>

          {/* Resend Timer */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleResend}
              className={`text-sm ${
                canResend
                  ? 'text-black hover:text-gray-700'
                  : 'text-black-400 cursor-not-allowed'
              }`}
              disabled={!canResend}
            >
              {canResend ? 'Resend Code' : `Resend code in ${timer}s`}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}