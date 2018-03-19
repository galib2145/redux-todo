import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers';
import { AddTodo, Footer } from './components';
import VisibleTodoList from './containers/VisibleTodoList';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

const store = createStore(todoApp);

let nextTodoId = 1;
const TodoApp = () => {
  return (
    <div>
      <AddTodo store={store}/>
      <VisibleTodoList store={store}/>
      <Footer store={store}/>
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
