import React from 'react';
import ReactDOM from 'react-dom';

import { getVisibleTodos } from '../utils'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href="#" onClick={(e) => {
        e.preventDefault();
        onClick();
      }}>
      {children}
    </a>  
  );
};


const Footer = ({
  onFilterClick,
  visibilityFilter
}) => {
  return (
    <p>
      <FilterLink 
        filter="SHOW_ALL" 
        currentFilter={visibilityFilter} 
        onClick={onFilterClick}>
        All
      </FilterLink>{', '}
      <FilterLink 
        filter="SHOW_ACTIVE" 
        currentFilter={visibilityFilter} 
        onClick={onFilterClick}>
        Active
      </FilterLink>{', '}
      <FilterLink 
        filter="SHOW_COMPLETED" 
        currentFilter={visibilityFilter} 
        onClick={onFilterClick}>
        Completed
      </FilterLink>
    </p> 
  );
};

const AddTodo = ({
  onAddClick
}) => {
  let input;
  return (
    <div>
      <input ref={(node) => input = node }/>
      <button onClick={() => {
            onAddClick(input.value);
            input.value = '';
          }}>Add todo
       </button>
    </div>);
};

const Todo = ({
  text,
  completed,
  onClick
}) => {
    return (<li style={{textDecoration: completed ? 'line-through' : 'none'}} 
      onClick={onClick}>{text}</li>);
};

const TodoList = ({
  todos,
  onTodoClick
}) => {
  return (
    <ul>
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} ></Todo>)}
   </ul>
  );
};

export { Link, Footer, AddTodo, Todo, TodoList };