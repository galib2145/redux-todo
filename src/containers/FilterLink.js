import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from '../components';
import { setVisibilityFilter } from '../action_creators';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);


export default FilterLink;