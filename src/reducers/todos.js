export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }]
    case 'TOGGLE_COMPLETE':
      const foundTodo = state.todos.find(todo => {
        return todo.id === action.id
      })
      return foundTodo.completed = !foundTodo.completed
    default:
      return state
  }
}