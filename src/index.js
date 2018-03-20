import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PropTypes from 'prop-types';
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

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store,
    }
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object,
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
