import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue }) => {
  // const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
    // todos.filter((value) => value === event.target.value);
    setSearchValue(event.target.value);
  };
  // console.log('cat', onSearchValueChange);
  
  return <input className="TodoSearch" placeholder="Garlic" 
    value={searchValue} onChange={onSearchValueChange} />;
}

export { TodoSearch };



