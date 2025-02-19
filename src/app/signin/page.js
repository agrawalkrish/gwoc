"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Mail, Phone, Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);
  const isFormFilled = () => Object.values(formData).every((value) => value.trim() !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormFilled()) return alert("Please fill in all fields.");
    if (!validateEmail(formData.email)) return alert("Invalid email address.");
    if (!validatePhone(formData.phone)) return alert("Invalid phone number.");
    if (formData.password !== formData.confirmPassword) return alert("Passwords do not match.");
    router.push("/OTP");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-300">
        <div className="flex justify-center mb-6 relative">
          <div className="w-full flex bg-gray-200 rounded-lg overflow-hidden">
            <button
              className={`w-1/2 py-3 text-lg font-semibold transition-all ${activeTab === "signup" ? "bg-black text-white" : "text-gray-500"}`}
              onClick={() => setActiveTab("signup")}>Sign Up</button>
            <button
              className={`w-1/2 py-3 text-lg font-semibold transition-all ${activeTab === "signin" ? "bg-black text-white" : "text-gray-500"}`}
              onClick={() => setActiveTab("signin")}>Sign In</button>
          </div>
        </div>

        {activeTab === "signup" && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-black" required />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-black" required />
            </div>

            <div className="flex justify-between">
              {["Male", "Female", "Other"].map((option) => (
                <button key={option} type="button" onClick={() => setFormData({ ...formData, gender: option })}
                  className={`px-4 py-2 border rounded-lg transition-all ${formData.gender === option ? "border-black bg-black text-white" : "border-gray-400 text-gray-700 hover:bg-gray-300"}`}>{option}</button>
              ))}
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address"
                className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-black" required />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-black" required />
            </div>

            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-black" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3">
                {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
              </button>
            </div>

            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-black" required />

            <button type="submit" className={`w-full py-3 rounded-lg text-white font-medium transition-all ${isFormFilled() ? "bg-black hover:bg-gray-800" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`} disabled={!isFormFilled()}>
              Create Account
            </button>
          </form>
        )}
        {activeTab === "signin" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-black"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
              </button>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white font-medium transition-all ${isFormFilled() ? "bg-black hover:bg-gray-800" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              disabled={!isFormFilled()}
            >
              Sign In
            </button>
          </form>
        )}


      </div>
    </div>
  );
}
