import React from "react";
import "./TodoList";

function TodoList(props) {
  return (
    <section className="TodoList">
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
