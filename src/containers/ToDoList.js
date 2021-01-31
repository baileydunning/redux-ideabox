import React from 'react'
import Todo from '../components/ToDo'
import { connect } from 'react-redux'

const ToDoList = ({ todos }) => {
  const filterTodos = (status) => {
    return todos.map(todo => {
      if (todo.completed === status) {
        return (
          <Todo
            todo={todo.todo}
            id={todo.id}
            key={todo.id}
            priority={todo.priority}
            completed={todo.completed}
          />
        )
      }
    })
  }

  return (
    <section className='main-container'>
      <div className='incomplete'>
        <h2 style={{ textAlign: 'center' }}>INCOMPLETE</h2>
        <section className='todo-list'>
          {filterTodos(false)}
        </section>
      </div>
      <div className='complete'>
        <h2 style={{ textAlign: 'center' }}>COMPLETE</h2>
        <section className='todo-list'>
          {filterTodos(true)}
        </section>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)