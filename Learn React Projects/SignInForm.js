import React, { useState } from 'react';

interface SignInFormState {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [state, setState] = useState<SignInFormState>({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    const errorState = {
      email: '',
      password: '',
    };

    if (!state.email.includes('@')) {
      errorState.email = 'Invalid email';
    }

    if (state.password.length < 8) {
      errorState.password = 'Password must be at least 8 characters';
    }

    setError(errorState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateForm();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          {error.email && (
            <p className="text-sm text-red-500 mt-2">{error.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          {error.password && (
            <p className="text-sm text-red-500 mt-2">{error.password}</p>
          )}
        </div>
        <button
          className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
          type="submit"
        >
          Sign In
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <a
            className="text-blue-500 hover:text-blue-700"
            href="/register"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
