import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAddExpense = () => {
    const newExpense = { description, amount };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount(0);
    setTotal(total + amount);
  };

  const handleDeleteExpense = (index) => {
    const newExpenses = expenses.filter((expense, i) => i !== index);
    setExpenses(newExpenses);
    setTotal(total - expenses[index].amount);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="description">
            Description
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <button
          className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
          type="button"
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
      </form>
      <h2 className="text-2xl font-bold mb-4">Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{expense.description}</span>
            <span>${expense.amount}</span>
            <button
              className="bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:border-red-500"
              onClick={() => handleDeleteExpense(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-4">Total: ${total}</h2>
    </div>
  );
};

export default ExpenseTracker;
