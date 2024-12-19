import React, { useState } from 'react';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const calculateTip = () => {
    if (billAmount === '') return 0;
    const bill = parseFloat(billAmount);
    const tip = (bill * tipPercentage) / 100;
    return tip;
  };

  const calculateTotal = () => {
    if (billAmount === '') return 0;
    const bill = parseFloat(billAmount);
    const tip = calculateTip();
    return bill + tip;
  };

  const calculateSplit = () => {
    if (billAmount === '') return 0;
    const total = calculateTotal();
    return total / numberOfPeople;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Tip Calculator</h1>
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-700">Bill Amount:</label>
        <input
          type="number"
          value={billAmount}
          onChange={e => setBillAmount(e.target.value)}
          className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter bill amount"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-700">Tip Percentage:</label>
        <select
          value={tipPercentage}
          onChange={e => setTipPercentage(parseInt(e.target.value))}
          className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
          <option value="25">25%</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-700">Number of People:</label>
        <input
          type="number"
          value={numberOfPeople}
          onChange={e => setNumberOfPeople(parseInt(e.target.value))}
          className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          min="1"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-700">Tip:</label>
        <p className="text-sm text-gray-700">${calculateTip().toFixed(2)}</p>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-700">Total:</label>
        <p className="text-sm text-gray-700">${calculateTotal().toFixed(2)}</p>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-700">Split:</label>
        <p className="text-sm text-gray-700">${calculateSplit().toFixed(2)} per person</p>
      </div>
    </div>
  );
};

export default TipCalculator;
