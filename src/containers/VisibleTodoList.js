import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import { TodoList } from '../components'
import { getVisibleTodos } from '../utils'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.context.store.subscribe(() => { 
      this.unsubscribe = this.forceUpdate();
    });    
  }

  componentWillUnmount() {
    this.unsubscribe();  
  }

  render() {
    const store = this.context.store;
    const todos = store.getState().todos;
    const visibilityFilter =  store.getState().visibilityFilter;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <TodoList todos={visibleTodos} onTodoClick={(id) => {
        store.dispatch({
          type: 'TOGGLE_TODO',
          id,
        });
      }}/>
    );  
  }    
}

VisibleTodoList.contextTypes = {
  store: PropTypes.object,
};

export default VisibleTodoList;