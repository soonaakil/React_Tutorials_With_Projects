import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              onLogin={handleLogin}
              user={user}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              onLogin={handleLogin}
              user={user}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard
                user={user}
                onLogout={handleLogout}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="*"
          element={
            <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const Login = ({ onLogin, user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      onLogin({ email, password });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && (
          <p className="text-sm text-red-500 mt-2">{error}</p>
        )}
        <button
          className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const Register = ({ onLogin, user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      onLogin({ email, password });
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        {error && (
          <p className="text-sm text-red-500 mt-2">{error}</p>
        )}
        <button
          className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">Dashboard</h1>
      <p className="text-sm font-medium mb-4">Welcome, {user.email}!</p>
      <button
        className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default App;
