import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from '../components';

console.log('Here');
console.log(Link);

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter,
      });
    },
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);


export default FilterLink;