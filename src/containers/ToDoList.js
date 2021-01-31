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
            completed={todo.completed}
          />
        )
      }
    })
  }

  return (
    <section className='main-container'>
      <section className='incomplete'>
      <h2 style={{textAlign: 'center'}}>INCOMPLETE</h2>
      <section className='todo-list'>
        { filterTodos(false) }
      </section>
      </section>
      <section className='complete'>
        <h2 style={{ textAlign: 'center' }}>COMPLETE</h2>
        <section className='todo-list'>
          { filterTodos(true) }
        </section>
      </section>
    </section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)