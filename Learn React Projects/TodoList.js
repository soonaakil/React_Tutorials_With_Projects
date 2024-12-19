import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [id, setId] = useState(1);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id, text: newTodo, completed: false }]);
      setNewTodo('');
      setId(id + 1);
    }
  };

  const handleToggleCompleted = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Add new todo"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 p-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo.id)}
              className="mr-2"
            />
            <span className={`text-sm ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{todo.text}</span>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="ml-auto p-2 text-sm text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
