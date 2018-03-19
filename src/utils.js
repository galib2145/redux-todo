const getVisibleTodos = (todos, filter) => {
  if (filter === 'SHOW_ALL')
    return todos;
  if (filter === 'SHOW_COMPLETED')
    return todos.filter(t => t.completed);
  if (filter === 'SHOW_ACTIVE')
    return todos.filter(t => !t.completed);
};

export { getVisibleTodos };