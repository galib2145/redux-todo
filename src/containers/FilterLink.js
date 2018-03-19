import { Link } from '../components';
import React from 'react';
import { Component } from 'react';

class FilterLink extends Component {
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

export default FilterLink;