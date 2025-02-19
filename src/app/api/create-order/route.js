import Razorpay from "razorpay";
import { NextResponse } from "next/server";

// Check if env variables are set
console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const { amount } = await req.json();
    
    if (!amount || isNaN(amount)) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const order = await razorpay.orders.create({
      amount: amount, // Amount in paise (e.g., 50000 for ₹500)
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`, // Unique receipt ID
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
