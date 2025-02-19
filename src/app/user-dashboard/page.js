"use client";
import React, { useState } from "react";
import {
  User,
  Wallet,
  ListOrdered,
  Star,
  Share2,
  Edit,
  Save,
  LogOut,
  Upload
} from "lucide-react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState({
    photo: "data:image/jpeg;base64,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",
    firstName: "Rohit",
    lastName: "Sharma",
    email: "rohit.sharma@gmail.com",
    phone: "+91 98765 43210",
    referralCode: "HELPER123",
    address: "123, Main Street, Mumbai, India",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [wallet] = useState({
    balance: 1500,
    transactions: [
      { id: 1, type: "debit", amount: 500, description: "AC Repair Service", date: "2023-10-01" },
      { id: 2, type: "credit", amount: 200, description: "Referral Bonus", date: "2023-10-05" },
    ],
  });
  const [orders] = useState([
    { id: 1, service: "AC Repair", date: "2023-10-01", status: "Completed", amount: 500 },
    { id: 2, service: "Plumbing", date: "2023-10-03", status: "In Progress", amount: 300 },
  ]);
  const [ratings, setRatings] = useState([
    { id: 1, service: "AC Repair", partner: "Rajesh Kumar", rating: 4, feedback: "Great service!" },
  ]);
  const [referrals] = useState([
    { id: 1, code: "HELPER123", usedBy: "user2@example.com", earnings: 200 },
  ]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const renderProfile = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-6">Profile</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
        <div className="space-y-8">
          {/* Profile Photo Section */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={user.photo}
                alt="User"
                className="w-24 h-24 rounded-full object-cover"
              />
              <label
                htmlFor="photo-upload"
                className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-all"
              >
                <Upload size={18} />
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">{`${user.firstName} ${user.lastName}`}</h3>
              <p className="text-sm text-black">{user.email}</p>
            </div>
          </div>
  
          {/* Input Fields with Labels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all disabled:bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all disabled:bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all disabled:bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all disabled:bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Referral Code</label>
              <input
                type="text"
                placeholder="Referral Code"
                value={user.referralCode}
                readOnly
                className="w-full px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Address</label>
              <input
                type="text"
                placeholder="Address"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all disabled:bg-gray-100"
              />
            </div>
          </div>
  
          {/* Edit/Save Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
          >
            {isEditing ? (
              <>
                <Save size={18} className="mr-2" />
                Save Changes
              </>
            ) : (
              <>
                <Edit size={18} className="mr-2" />
                Edit Profile
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderWallet = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-6">Wallet</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-black">Wallet Balance</h3>
            <p className="text-2xl font-bold text-black">₹{wallet.balance}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Transactions</h3>
            <div className="space-y-4">
              {wallet.transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-black">{transaction.description}</p>
                    <p className="text-sm text-black">{transaction.date}</p>
                  </div>
                  <p
                    className={`text-lg font-semibold ${transaction.type === "credit" ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {transaction.type === "credit" ? "+" : "-"}₹{transaction.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-6">Orders & Services</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-black">{order.service}</p>
                <p className="text-sm text-black">{order.date}</p>
              </div>
              <div>
                <p className="text-black">₹{order.amount}</p>
                <p
                  className={`text-sm ${order.status === "Completed" ? "text-green-600" : "text-yellow-600"
                    }`}
                >
                  {order.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRatings = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-6">Rate Services</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
        <div className="space-y-8">
          {/* Service 1 */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-black">AC Repair Service</h3>
            <p className="text-sm text-black mb-4">Partner: Rajesh Kumar</p>
            <div className="flex space-x-2 mb-4">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setRatings((prev) =>
                      prev.map((r) =>
                        r.service === "AC Repair"
                          ? { ...r, rating: index + 1 }
                          : r
                      )
                    )
                  }
                  className={`text-3xl ${
                    index < ratings.find((r) => r.service === "AC Repair")?.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  } hover:text-yellow-500 transition-all`}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              placeholder="Leave feedback for AC Repair Service..."
              value={ratings.find((r) => r.service === "AC Repair")?.feedback || ""}
              onChange={(e) =>
                setRatings((prev) =>
                  prev.map((r) =>
                    r.service === "AC Repair"
                      ? { ...r, feedback: e.target.value }
                      : r
                  )
                )
              }
              className="w-full px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
              rows={3}
            />
            <button
              onClick={() => alert("Rating and feedback submitted for AC Repair Service!")}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Submit Rating
            </button>
          </div>
  
          {/* Service 2 */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-black">Plumbing Service</h3>
            <p className="text-sm text-black mb-4">Partner: Amit Sharma</p>
            <div className="flex space-x-2 mb-4">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setRatings((prev) =>
                      prev.map((r) =>
                        r.service === "Plumbing"
                          ? { ...r, rating: index + 1 }
                          : r
                      )
                    )
                  }
                  className={`text-3xl ${
                    index < ratings.find((r) => r.service === "Plumbing")?.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  } hover:text-yellow-500 transition-all`}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              placeholder="Leave feedback for Plumbing Service..."
              value={ratings.find((r) => r.service === "Plumbing")?.feedback || ""}
              onChange={(e) =>
                setRatings((prev) =>
                  prev.map((r) =>
                    r.service === "Plumbing"
                      ? { ...r, feedback: e.target.value }
                      : r
                  )
                )
              }
              className="w-full px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
              rows={3}
            />
            <button
              onClick={() => alert("Rating and feedback submitted for Plumbing Service!")}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Submit Rating
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReferrals = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-6">Referrals</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-black">Your Referral Code</h3>
            <p className="text-black">{user.referralCode}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Referral History</h3>
            <div className="space-y-4">
              {referrals.map((referral) => (
                <div key={referral.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-black">Used by: {referral.usedBy}</p>
                    <p className="text-sm text-black">Earnings: ₹{referral.earnings}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSidebar = () => (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold">HelperBuddy User</h1>
      </div>
      <nav className="mt-6">
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === "profile" ? "bg-gray-800" : "hover:bg-gray-800"
            }`}
          onClick={() => setActiveTab("profile")}
        >
          <User size={20} className="mr-3" />
          <span>Profile</span>
        </div>
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === "wallet" ? "bg-gray-800" : "hover:bg-gray-800"
            }`}
          onClick={() => setActiveTab("wallet")}
        >
          <Wallet size={20} className="mr-3" />
          <span>Wallet</span>
        </div>
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === "orders" ? "bg-gray-800" : "hover:bg-gray-800"
            }`}
          onClick={() => setActiveTab("orders")}
        >
          <ListOrdered size={20} className="mr-3" />
          <span>Orders & Services</span>
        </div>
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === "ratings" ? "bg-gray-800" : "hover:bg-gray-800"
            }`}
          onClick={() => setActiveTab("ratings")}
        >
          <Star size={20} className="mr-3" />
          <span>Rate Services</span>
        </div>
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === "referrals" ? "bg-gray-800" : "hover:bg-gray-800"
            }`}
          onClick={() => setActiveTab("referrals")}
        >
          <Share2 size={20} className="mr-3" />
          <span>Referrals</span>
        </div>
      </nav>
      <div className="absolute bottom-0 w-full p-6">
        <div className="flex items-center cursor-pointer hover:bg-gray-800 p-3 rounded transition-all">
          <LogOut size={20} className="mr-3" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {renderSidebar()}
      <div className="ml-64 flex-1">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=320,fit=crop,q=95/AzGeNv8QxRTqXJan/20241226_222044-AwvDvRazrEUZ8ZMp.png"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
          </div>
          {activeTab === "profile" && renderProfile()}
          {activeTab === "wallet" && renderWallet()}
          {activeTab === "orders" && renderOrders()}
          {activeTab === "ratings" && renderRatings()}
          {activeTab === "referrals" && renderReferrals()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;