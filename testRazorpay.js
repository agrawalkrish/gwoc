const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'rzp_test_mIhosKMN4dm852',
  key_secret: 'PuLww1WUzu00h1Lwww50d4bM',
});

const options = {
  amount: 50000, // amount in paise
  currency: 'INR',
  receipt: 'receipt#1',
};

razorpay.orders.create(options)
  .then(order => {
    console.log('Order created successfully:', order);
  })
  .catch(error => {
    console.error('Error creating order:', error);
  });
