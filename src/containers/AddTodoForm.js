import React, { Component } from 'react'
import { addToDo } from '../actions'
import { connect } from 'react-redux'

class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      todo: '',
      priority: 'red' 
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitForm = (e) => {
    e.preventDefault()
    const newTodo = {
      todo: this.state.todo,
      priority: this.state.priority
    }
    this.props.addToDo(newTodo)
    this.setState({ todo: '' })
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            name='todo'
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <select 
            name='priority' 
            value={this.state.priority}
            onChange={this.handleChange}
          >
            <option value='red'>High</option>
            <option value='orange'>Medium</option>
            <option value='darkgreen'>Low</option>
          </select>
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addToDo: todo => dispatch(addToDo(todo))
})

export default connect(null, mapDispatchToProps)(AddTodoForm)
