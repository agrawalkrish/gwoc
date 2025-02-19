'use client';
import { useState } from 'react';

const PaymentPage = () => {
  const [order, setOrder] = useState(null);

  const handlePayment = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setOrder(data);

      if (!data.error) {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
          amount: data.amount,
          currency: data.currency,
          name: 'Your Company Name',
          description: 'Test Transaction',
          order_id: data.id,
          handler: function (response) {
            alert(`Payment Successful: ${response.razorpay_payment_id}`);
          },
          prefill: {
            name: 'Customer Name',
            email: 'customer@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#F37254',
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        alert('Failed to create order. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Pay ₹500</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
