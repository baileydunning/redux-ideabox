import React, { Component } from 'react'
import { toggleComplete } from '../actions'
import { connect } from 'react-redux'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      todo: this.props.todo,
      completed: this.props.completed
    }
  }

  handleChange = () => {
    this.props.toggleComplete(this.state.id)
  }

  render() {
    return (
      <form className='todo-item'>
          <input
            onChange={() => this.handleChange()}
            checked={this.state.completed} 
            type='checkbox'
            name='completed' />
        <label htmlFor='completed'>
          { this.props.todo }
        </label>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch(toggleComplete(id))
})

export default connect(null, mapDispatchToProps)(ToDo)