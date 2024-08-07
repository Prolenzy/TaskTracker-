// Import necessary modules from React
import React, { useState } from 'react';

// TodoForm component to handle adding a new todo item
const TodoForm = ({ addTodo }) => {
  // State to keep track of the current text input
  const [text, setText] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    addTodo(text); // Call the addTodo function passed as a prop with the current text input
    setText(''); // Clear the text input
  };

  return (
    // Form element to wrap the input field and submit button
    <form onSubmit={handleSubmit}>
      {/* Input field for entering the todo text */}
      <input
        type="text"
        value={text} // Bind the input field value to the state
        onChange={(e) => setText(e.target.value)} // Update the state with the input field value on change
        placeholder="Add a new todo" // Placeholder text for the input field
      />
      {/* Submit button to add the new todo */}
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
