import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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
