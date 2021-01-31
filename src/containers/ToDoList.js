import React from 'react'
import Todo from '../components/ToDo'
import { connect } from 'react-redux'

const ToDoList = ({ todos }) => {
  let displayTodos
  
  if (todos) {
    displayTodos = todos.map(todo => {
      return (
        <Todo
          todo={todo.todo}
          id={todo.id}
          key={todo.id}
          completed={todo.completed}
        />
      )
    })
  }

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