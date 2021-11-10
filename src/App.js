import React from "react";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";

const todos = [
  { text: "Cut onion", completed: false },
  { text: "Cut carrot", completed: false },
  { text: "Cut apple", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      {<TodoSearch />}
      {
        <TodoList>
          {todos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} />
          ))}
        </TodoList>
      }
      {<CreateTodoButton />}
    </React.Fragment>
  );
}

export default App;
