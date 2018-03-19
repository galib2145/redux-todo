import React from 'react';
import ReactDOM from 'react-dom';

import { getVisibleTodos } from '../utils';
import FilterLink from '../containers/FilterLink';

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

const Footer = ({ store }) => {
  return (
    <p>
      <FilterLink store={store} filter="SHOW_ALL">All</FilterLink>{', '}
      <FilterLink store={store} filter="SHOW_ACTIVE">Active</FilterLink>{', '}
      <FilterLink store={store} filter="SHOW_COMPLETED">Completed</FilterLink>
    </p> 
  );
};

const AddTodo = ({ store }) => {
  let input;
  return (
    <div>
      <input ref={(node) => input = node }/>
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
        });
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

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} ></Todo>)}
   </ul>
  );
};

export { Link, Footer, AddTodo, Todo, TodoList };