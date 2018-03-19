import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers';
import { AddTodo, TodoList, Footer } from './components';
import { getVisibleTodos } from './utils'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

const store = createStore(todoApp);

let nextTodoId = 1;
const TodoApp = ({
  todos,
  visibilityFilter
}) => {
  const visibleTodos = getVisibleTodos(todos, visibilityFilter);
  return (
    <div>
      <AddTodo onAddClick={(text) => {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text,
        });
      }}/>
      <TodoList todos={visibleTodos} onTodoClick={(id) => {
        store.dispatch({ type: 'TOGGLE_TODO', id, });}}/>
      <Footer visibilityFilter={visibilityFilter} onFilterClick={(filter) => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter,
      })}/>
      </div>  
  );
};


const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('root')
  );
};

store.subscribe(render);

render();
registerServiceWorker();
