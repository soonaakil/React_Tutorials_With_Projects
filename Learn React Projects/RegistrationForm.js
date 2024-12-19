import React, { useState } from 'react';

interface RegistrationFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = () => {
  const [state, setState] = useState<RegistrationFormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    const errorState = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!state.firstName) {
      errorState.firstName = 'First name is required';
    }

    if (!state.lastName) {
      errorState.lastName = 'Last name is required';
    }

    if (!state.email.includes('@')) {
      errorState.email = 'Invalid email';
    }

    if (state.password.length < 8) {
      errorState.password = 'Password must be at least 8 characters';
    }

    if (state.password !== state.confirmPassword) {
      errorState.confirmPassword = 'Passwords do not match';
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
      <h2 className="text-lg font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="firstName"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
          {error.firstName && (
            <p className="text-sm text-red-500 mt-2">{error.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="lastName"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
          {error.lastName && (
            <p className="text-sm text-red-500 mt-2">{error.lastName}</p>
          )}
        </div>
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
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
          />
          {error.confirmPassword && (
            <p className="text-sm text-red-500 mt-2">
              {error.confirmPassword}
            </p>
          )}
        </div>
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

export default RegistrationForm;
