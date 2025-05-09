
import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Pick up kids from school", completed: false },
    { id: 2, text: "Plan weekend outing", completed: false },
    { id: 3, text: "Prepare for presentation", completed: true },
    { id: 4, text: "Meeting with Alisa", completed: false },
    { id: 5, text: "Create invoice", completed: false }
  ]);
  const [newTodo, setNewTodo] = useState("");
  
  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = Math.max(0, ...todos.map(t => t.id)) + 1;
      setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };
  
  return (
    <div className="bg-dashboard-card rounded-lg p-5 h-full">
      <h2 className="text-white text-lg font-medium mb-4">To Do List</h2>
      
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter task..."
          className="flex-1 bg-dashboard-dark border border-dashboard-highlight rounded-l-md py-2 px-4 text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button 
          onClick={addTodo}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-md px-4 py-2 flex items-center"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="space-y-2">
        {todos.map((todo) => (
          <div 
            key={todo.id} 
            className="flex items-start gap-2"
          >
            <div
              onClick={() => toggleComplete(todo.id)}
              className={`w-5 h-5 border rounded mt-0.5 flex items-center justify-center cursor-pointer ${
                todo.completed 
                  ? 'bg-blue-600 border-blue-600' 
                  : 'border-gray-600 hover:border-blue-400'
              }`}
            >
              {todo.completed && <Check size={14} className="text-white" />}
            </div>
            <p className={`text-sm ${todo.completed ? 'text-gray-500 line-through' : 'text-white'}`}>
              {todo.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
