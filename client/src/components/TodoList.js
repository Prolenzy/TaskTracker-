// Import necessary modules from React and axios
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem'; // Import the TodoItem component
import TodoForm from './TodoForm'; // Import the TodoForm component

// Main TodoList component
const TodoList = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // useEffect hook to fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data); // Update the state with the fetched todos
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Function to add a new todo
  const addTodo = async (text) => {
    try {
      const response = await axios.post('http://localhost:5000/api/todos', { text });
      setTodos([...todos, response.data]); // Add the new todo to the state
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Function to update an existing todo
  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => (todo._id === id ? response.data : todo))); // Update the state with the updated todo
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  // Function to delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id)); // Remove the deleted todo from the state
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} /> {/* Form to add new todos */}
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
