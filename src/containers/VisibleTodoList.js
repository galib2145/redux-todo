import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import { TodoList } from '../components'
import { getVisibleTodos } from '../utils'
import { toggleTodo } from '../action_creators';

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos, 
      state.visibilityFilter
    ),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
     onTodoClick: (id) => {
       dispatch(toggleTodo(id))
     },
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;