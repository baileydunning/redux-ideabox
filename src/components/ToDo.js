import React, { Component } from 'react'
import { connect } from 'react-redux'

class ToDo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form className='todo-item'>
          <input
            checked={this.props.completed} 
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
  toggleComplete: id => dispatch(this.props.toggleComplete(id))
})

export default connect(null, mapDispatchToProps)(ToDo)