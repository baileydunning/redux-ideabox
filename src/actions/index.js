export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const toggleComplete = id => ({
  type: 'TOGGLE_COMPLETE',
  id
})

export const editTodo = todo => ({
  type: 'EDIT_TODO',
  todo
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})