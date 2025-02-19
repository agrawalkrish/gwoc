import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { phoneNumber, otp } = await request.json();

    // Add your OTP verification logic here
    // For example, verify against stored OTP
    
    // Dummy validation
    if (otp === '123456') { // Replace with actual verification
      return NextResponse.json({ 
        success: true, 
        message: 'OTP verified successfully' 
      });
    }

    return NextResponse.json({ 
      success: false, 
      error: 'Invalid OTP' 
    }, { status: 400 });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to verify OTP' 
    }, { status: 500 });
  }
}
