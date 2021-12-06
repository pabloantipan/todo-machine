import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
  const onClickButton = (message) => {
    alert(message);
  };

  return (
    <button className="CreateTodoButton" onClick={() => onClickButton('Here a model should be opened!')}>
      +
    </button>
  );
}

export { CreateTodoButton };
