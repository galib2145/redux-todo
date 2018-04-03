let nextTodoId = 1;

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextTodoId++,
  };
};

const toggleTodo = (id) => {
  return {
    id,
    type: 'TOGGLE_TODO',
  }
};

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter,
  }; 
};

export { addTodo, toggleTodo, setVisibilityFilter, };
