import React from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
  { id: 0, text: 'Cut onion', completed: true, deleted: false },
  { id: 1, text: 'Cut carrot', completed: false, deleted: false },
  { id: 2, text: 'Cut apple', completed: false, deleted: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [visibleTodos, setVisibleTodos] = React.useState(todos.filter(todo => !todo.deleted));
  const [searchValue, setSearchValue] = React.useState([]);

  let searchedTodos = [];

  if (searchValue.length  === 0 ){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const onDeleteItem = (todoId) => {
    console.log(todoId)
    todos.forEach((todo) => {
      if (todo.id === todoId ) todo.deleted = true;
    });
    console.log(todos);
    setVisibleTodos(todos.filter(todo => !todo.deleted));
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {visibleTodos.map(todo => (
          <TodoItem key={todo.id} {...todo} onDeleteItem={onDeleteItem} />
        ))}
        {/* {searchedTodos.filter(todo => !todo.deleted)
          .map(todo => (
            <TodoItem key={todo.id} {...todo} todos={todos}/>
        ))} */}
      </TodoList>

      <CreateTodoButton todos={todos} searchValue={searchValue} 
        setSearchValue={setSearchValue}/>
    </React.Fragment>
  );
}

export default App;
