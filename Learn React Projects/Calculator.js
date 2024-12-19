import React, { useState } from 'react';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        const calculationResult = eval(expression);
        setResult(calculationResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <div className="flex flex-col mb-4">
        <input
          type="text"
          value={expression}
          className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          readOnly
        />
        <input
          type="text"
          value={result}
          className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => handleButtonClick('7')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick('8')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick('9')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick('/')}
          className="p-2 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-orange-500"
        >
          /
        </button>
        <button
          onClick={() => handleButtonClick('4')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick('5')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick('6')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick('*')}
          className="p-2 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-orange-500"
        >
          *
        </button>
        <button
          onClick={() => handleButtonClick('1')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick('2')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick('3')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick('-')}
          className="p-2 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-orange-500"
        >
          -
        </button>
        <button
          onClick={() => handleButtonClick('0')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          0
        </button>
        <button
          onClick={() => handleButtonClick('.')}
          className="p-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-gray-500"
        >
          .
        </button>
        <button
          onClick={() => handleButtonClick('=')}
          className="p-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-blue-500"
        >
          =
        </button>
        <button
          onClick={() => handleButtonClick('+')}
          className="p-2 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-orange-500"
        >
          +
        </button>
        <button
          onClick={() => handleButtonClick('C')}
          className="p-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-red-500"
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
