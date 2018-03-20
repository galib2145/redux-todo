import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getVisibleTodos } from '../utils';
import FilterLink from '../containers/FilterLink';

let nextTodoId = 1;

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

const AddTodo = (props, { store }) => {
  let input;
  return (
    <div>
      <input ref={(node) => input = node }/>
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: nextTodoId++,
        });
        input.value = '';
      }}>Add todo
       </button>
    </div>);
};

AddTodo.contextTypes = {
  store: PropTypes.object,
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