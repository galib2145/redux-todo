import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getVisibleTodos } from '../utils';

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

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={(node) => input = node }/>
      <button onClick={() => {
        dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: nextTodoId++,
        });
        input.value = '';
      }}>Add todo
       </button>
    </div>);
};

AddTodo = connect()(AddTodo);

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

export { Link, AddTodo, Todo, TodoList };