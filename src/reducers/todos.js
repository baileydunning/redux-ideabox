export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newToDo = { id: Date.now(), todo: action.todo, completed: false }
      return newToDo.todo && [...state, newToDo]
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