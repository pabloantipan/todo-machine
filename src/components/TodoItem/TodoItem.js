import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  // console.log(props);

  const onComplete = () => {
    alert("You've completed the todo" + props.text);

  };
  // const onDelete = () => {
  //   console.log("TodoItem:", props)
  //   if (props.todos){
  //     props.todos[props.id].deleted = true;
  //     console.log(props.todos);
  //   }
  //   // alert("You've deleted the todo" + props.text);
  // };

  return (
    <li className={`TodoItem ${!props.deleted && 'Item-no--visible'}`}>
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" 
        onClick={() => props.onDeleteItem(props.id)}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
