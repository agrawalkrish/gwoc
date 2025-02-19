"use client";
import React, { useState } from 'react';
import { Search, X, ArrowRight, ShoppingCart, Plus, Minus } from 'lucide-react';

const ServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All products');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const categories = [
    'All products',
    'AC Service',
    'Bathroom & kitchen cleaning',
    'Carpenter',
    'Chimney Repair',
    'Electrician',
    'Microwave Repair',
    'Plumbers',
    'Refrigerator Repair',
    'Sofa & Carpet Cleaning',
    'Washing Machine Repair',
    'Water Purifier Repair'
  ];

  const services = [
    { id: 1, title: 'Ceiling Fan Cleaning', category: 'Electrician', price: 49, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734716918907-Low-angle-view-of-an-Asian-man-cleaning-ceiling-fan-at-home-Merry-Maids.webp` },
    { id: 2, title: 'Glass Shelf Installation', category: 'Carpenter', price: 299, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734717017311-store_01JCYZKF09EKDA2HS3ZXYAX2G1_assets_1734642265270-1701178669199-3d201d.webp` },
    { id: 3, title: 'Exhaust Fan Cleaning', category: 'Electrician', price: 199, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734717113602-store_01JCYZKF09EKDA2HS3ZXYAX2G1_assets_1733054137825-commercial-exhaust-fan-825x510.webp` },
    { id: 4, title: 'Gas Stove Cleaning', category: 'Kitchen Cleaning', price: 249, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734717544790-store_01JCYZKF09EKDA2HS3ZXYAX2G1_assets_1733054776253-Cleaning-Gas-Stove-At-Home.webp` },
    { id: 5, title: 'Kitchen Sink Cleaning', category: 'Plumbers', price: 179, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734717637983-store_01JCYZKF09EKDA2HS3ZXYAX2G1_assets_1733054355534-1597.webp` },
    { id: 6, title: 'Fan Installation', category: 'Electrician', price: 299, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=369,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734717748083-545e2c_cbba41d9d4824a2db1bcaafae19e7267mv2.webp` },
    { id: 7, title: 'Drawer Channel Replacement', category: 'Carpenter', price: 249, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=638,h=358,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734718706127-d9R1UAvoDD.webp` },
    { id: 8, title: 'Shower Fitter Installation', category: 'Plumbers', price: 299, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734719258828-how-to-change-.webp` },
    { id: 9, title: '3 Ceiling Fan Cleaning', category: 'Electrician', price: 299, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734718847536-op_emily-fazio_how-to-clean-fan_dusty-fan-blades.webp` },
    { id: 10, title: 'Microwave Cleaning', category: 'Microwave Repair', price: 199, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734718024640-store_01JCYZKF09EKDA2HS3ZXYAX2G1_assets_1733054866369-GettyImages-1407823157-1-e1671659346455.webp` },
    { id: 11, title: 'Fully Automatic Washing Machine Checkup', category: 'Washing Machine Repair', price: 249, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734719510714-Washing-machine-repair-costs-explained-Featured-image-scaled1.webp` },
    { id: 12, title: 'Window Hinge Installation', category: 'Carpenter', price: 199, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734719584705-75-x-12-x-10-500x500.webp` },
    { id: 13, title: 'Semi Automatic Washing Machine Checkup', category: 'Washing Machine Repair', price: 199, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734720193048-semi-automatic-washing-machine-repairing-service.webp` },
    { id: 14, title: 'Cushions Cleaning', category: 'Sofa & Carpet Cleaning', price: 149, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734720389613-How_to_Deep-Clean_Removable_Couch_Cushions.webp` },
    { id: 15, title: 'Switchbox Installation', category: 'Electrician', price: 199, image: `https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=344,fit=crop,q=100/cdn-ecommerce/store_01JCYZKF09EKDA2HS3ZXYAX2G1%2Fassets%2F1734721500347-15-Amp-Switch-Box-d.webp` }
  ];

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert('Razorpay SDK failed to load');
      return;
    }

    try {
      const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      console.log('Total cost:', totalCost);

      const orderData = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(totalCost * 100), // Convert to paise
          items: cartItems.map(item => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price,
            title: item.title
          }))
        }),
      });

      if (!orderData.ok) {
        const errorResponse = await orderData.json();
        console.error('Error creating order:', errorResponse);
        throw new Error('Failed to create order');
      }

      const order = await orderData.json();
      console.log('Order created:', order);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Math.round(totalCost * 100), // Amount in paise
        currency: "INR",
        name: "Helper Buddy",
        description: "Service Booking",
        order_id: order.id,
        handler: async function (response) {
          try {
            const data = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                items: cartItems
              }),
            });

            const result = await data.json();

            if (result.success) {
              setCartItems([]);
              setIsCartOpen(false);
              alert('Payment successful! Your services have been booked.');
            }
          } catch (err) {
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#000000",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error('Payment error:', error);
      alert('Error creating order. Please try again.');
    }
  };

  const addToCart = (service) => {
    const existingItem = cartItems.find(item => item.id === service.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === service.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...service, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (serviceId) => {
    setCartItems(cartItems.filter(item => item.id !== serviceId));
  };

  const updateQuantity = (serviceId, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === serviceId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 
          ? { ...item, quantity: newQuantity }
          : null;
      }
      return item;
    }).filter(Boolean));
  };

  const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const filteredServices = services.filter(service => 
    (selectedCategory === 'All products' || service.category === selectedCategory) &&
    (service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     service.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white text-black p-8 relative">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search services..."
          className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
      </div>

      <div className="flex gap-8">
        {/* Filter Section */}
        <div className="w-64 flex-shrink-0">
          <h2 className="text-xl font-semibold mb-4">Browse by</h2>
          <div className="space-y-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-2">{service.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">₹{service.price}</span>
                    <button 
                      onClick={() => addToCart(service)}
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sliding Cart Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <ShoppingCart className="mr-2" />
              <h2 className="text-xl font-semibold">Your Cart</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4 mb-4 p-4 border rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold">₹{item.price}</span>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600">Subtotal: ₹{item.price * item.quantity}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total and Checkout */}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-bold">₹{totalCost}</span>
            </div>
            <button onClick={handlePayment}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
              <span className="mr-2">Pay Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;