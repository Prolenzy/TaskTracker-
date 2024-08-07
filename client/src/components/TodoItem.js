// Import necessary modules from React
import React from 'react';

// TodoItem component to represent a single todo item
const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  // Function to toggle the completion status of a todo
  const toggleComplete = () => {
    // Call updateTodo function passed as a prop to update the completed status of the todo
    updateTodo(todo._id, { ...todo, completed: !todo.completed });
  };

  return (
    <div>
      {/* Checkbox to mark the todo as completed or not completed */}
      <input
        type="checkbox"
        checked={todo.completed} // Checked status is determined by the completed property of the todo
        onChange={toggleComplete} // Toggle the completed status when the checkbox is clicked
      />
      {/* Span to display the todo text with conditional styling based on completion status */}
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      {/* Button to delete the todo */}
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
