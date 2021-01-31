import React from 'react'
import Todo from '../components/ToDo'
import { connect } from 'react-redux'

const ToDoList = ({ todos }) => {
  const displayTodos = todos.map(todo => {
    return (
      <Todo
        todo={todo.todo}
        key={todo.id}
        completed={todo.completed}
      />
    )
  })

  return (
    <section className='todo-list'>
      { displayTodos }
    </section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)