import { Link } from '../components';
import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

class FilterLink extends Component {
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
    const filter = this.props.filter;
    const currentFilter = store.getState().visibilityFilter;

    return (
      <Link active={filter === currentFilter} onClick={() => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter,
        });
       }}>{this.props.children}
      </Link>  
    );  
  }    
}

FilterLink.contextTypes = {
  store: PropTypes.object,
};


export default FilterLink;