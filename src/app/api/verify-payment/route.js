import crypto from 'crypto';

export async function POST(req) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, items } = await req.json();

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET) // Use the private key
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Save order details to your database here
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Something went wrong' }, { status: 500 });
  }
}