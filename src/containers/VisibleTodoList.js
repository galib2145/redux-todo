import { Component } from 'react';
import React from 'react';

import { TodoList } from '../components'
import { getVisibleTodos } from '../utils'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.props.store.subscribe(() => { 
      this.unsubscribe = this.forceUpdate();
    });    
  }

  componentWillUnmount() {
    this.unsubscribe();  
  }

  render() {
    const store = this.props.store;
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

export default VisibleTodoList;