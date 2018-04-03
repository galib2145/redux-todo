import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers';
import { AddTodo } from './components';
import { Provider } from 'react-redux'; 
import VisibleTodoList from './containers/VisibleTodoList';
import FilterLink from './containers/FilterLink';

const persistedState = {
  todos: [{
    id: 1,
    text: 'Welcome back!',
    completed: true,
  }],
};

const todoApp = combineReducers({ todos, visibilityFilter, });
const store = createStore(todoApp, persistedState);

const Footer = () => {
  return (
    <p>
      <FilterLink filter="SHOW_ALL">All</FilterLink>{', '}
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{', '}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p> 
  );
};

const TodoApp = () => {
  return (
    <div>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>  
  );
};

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp {...store.getState()}/>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);

render();
registerServiceWorker();
