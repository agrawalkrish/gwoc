import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { phoneNumber } = await request.json();

    // Add your OTP sending logic here
    // For example, integrate with SMS service
    
    // Dummy response
    return NextResponse.json({ 
      success: true, 
      message: 'OTP sent successfully' 
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to send OTP' 
    }, { status: 500 });
  }
}
