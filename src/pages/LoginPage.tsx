import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Hardcoded credentials
  const validEmail = 'Chanderkotnala1@gmail.com';
  const validPassword = 'Raksheeza@786';

  if (email === validEmail && password === validPassword) {
    localStorage.setItem('authToken', 'your-token');
    navigate('/account');
  } else {
    alert('Invalid email or password');
  }
};


  return (
    <div className="flex min-h-screen bg-white">
      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="text-left">
            <h1 className="text-2xl font-bold mb-2"> 
              <span className="text-black">F</span><span className="text-indigo-600">N</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-none space-y-5">
            <div>
              <label className="block font-medium text-sm text-gray-700">
                <span className="text-red-500 mr-1">*</span> E-Mail
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Type your email here."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block font-medium text-sm text-gray-700">
                <span className="text-red-500 mr-1">*</span> Password
              </label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Type your password here."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg transition duration-200"
            >
              Log In
            </button>

            <div className="text-center">
              <a href="#" className="text-sm text-indigo-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div className="flex items-center justify-between">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-gray-400 text-sm">or</span>
              <hr className="w-full border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 flex items-center justify-center py-2 rounded-lg hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Log In with Google
            </button>

            <div className="text-center text-sm mt-4">
              Don’t have an account?{' '}
              <a href="#" className="text-indigo-500 hover:underline">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Right: Image/CTA */}
      <div className="hidden md:block md:w-1/2 bg-indigo-100 relative">
        <div className="absolute inset-0 bg-[url('/your-dashboard-screenshot.png')] bg-no-repeat bg-contain bg-right-bottom" />
        <div className="absolute top-1/4 left-8">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Track your trades on-the-go with easy dashboard access!</h2>
          <p className="text-gray-700 text-lg">Your dashboard is just a few clicks away!</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
