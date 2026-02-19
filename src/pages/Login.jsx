import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Login successful", user);
        alert("✅ Login successful!");
        form.reset();
        navigate("/"); // redirect to home page
      })
      .catch((error) => {
        console.log(error.code, error.message);

        if (error.code === "auth/wrong-password") {
          alert("⚠️ Wrong password!");
        } else if (error.code === "auth/user-not-found") {
          alert("⚠️ User not found!");
        } else if (error.code === "auth/invalid-email") {
          alert("⚠️ Invalid email address!");
        } else {
          alert(error.message);
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>
        <p className="mt-1 mb-6 text-center text-gray-500">
          Enter your credentials to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-right">
            <a className="text-sm text-blue-600 cursor-pointer hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="mt-5 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="font-medium text-blue-600 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
