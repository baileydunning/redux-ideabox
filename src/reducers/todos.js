export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newToDo = { id: Date.now(), todo: action.todo.todo, completed: false, priority: action.todo.priority }
      if (!newToDo.todo) {
        alert('Add all required fields before submission')
        return state
      }
      return [...state, newToDo]
    case 'EDIT_TODO':
      return state.map(todo => {
        if (todo.id === action.todo.id) {
          todo.todo = action.todo.todo
          todo.priority = action.todo.priority
        }
        return todo
      })
    case 'DELETE_TODO':
      return state.filter(todo => {
        return todo.id !== action.id
      })
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    default:
      return state
  }
}