import React, { Component } from 'react'
import AddTodoForm from '../containers/AddTodoForm'
import ToDoList from '../containers/ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My ToDo List</h1>
        <AddTodoForm />
        <ToDoList />
      </div>
    )
  }
}

export default App
