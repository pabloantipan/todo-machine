import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ searchValue, todos, setSearchValue }) {

  const onAddNewTodo = () => {
    const idx = todos.length;
    todos.push({ id: idx, text: searchValue, completed: false, deleted: false });
    setSearchValue('');
    console.log(todos);
  }

  return (
    <button className="CreateTodoButton" 
      onClick={() => onAddNewTodo()}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
