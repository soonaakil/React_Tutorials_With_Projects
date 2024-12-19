import React, { useState, createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  transactions: [],
  income: 0,
  expenses: 0,
  balance: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        income: state.income + (action.payload.amount > 0 ? action.payload.amount : 0),
        expenses: state.expenses + (action.payload.amount < 0 ? -action.payload.amount : 0),
        balance: state.balance + action.payload.amount,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
        income: state.income - state.transactions.find((transaction) => transaction.id === action.payload).amount,
        expenses: state.expenses - state.transactions.find((transaction) => transaction.id === action.payload).amount,
        balance: state.balance - state.transactions.find((transaction) => transaction.id === action.payload).amount,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const TransactionList = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {state.transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.description}</span>
            <span>${transaction.amount}</span>
            <button onClick={() => dispatch({ type: 'DELETE_TRANSACTION', payload: transaction.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddTransaction = () => {
  const { dispatch } = useContext(AppContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: {
        id: Math.floor(Math.random() * 1000),
        description,
        amount,
      },
    });
    setDescription('');
    setAmount(0);
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount"
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

const Balance = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2>Balance: ${state.balance}</h2>
      <h2>Income: ${state.income}</h2>
      <h2>Expenses: ${state.expenses}</h2>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Balance />
      <TransactionList />
      <AddTransaction />
    </AppProvider>
  );
};

export default App;
