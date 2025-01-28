import React, { useState } from "react";

const ClientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Attempted", { email, password, captcha });
  };

  const handleRefreshCaptcha = () => {
    console.log("Captcha refreshed");
  };

  return (
    <div className="flex items-center justify-center h-fit m-20">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-center mb-4">User Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email or Login ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email or ID"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="captcha"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Captcha
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                id="captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter Captcha"
                required
              />
              <button
                type="button"
                onClick={handleRefreshCaptcha}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium"
              >
                Refresh Captcha
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            New User?{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
