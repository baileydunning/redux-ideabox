import React, { Component } from 'react'
import { toggleComplete } from '../actions'
import { connect } from 'react-redux'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      todo: this.props.todo,
      priority: this.props.priority,
      completed: this.props.completed
    }
  }

  handleChange = () => {
    this.props.toggleComplete(this.state.id)
    this.setState({
      completed: !this.state.completed
    })
  }
  render() {
    return (
      <form className='todo-item'>
          <input
            onChange={() => this.handleChange()}
            checked={this.state.completed} 
            type='checkbox'
            name='completed'
          />
        <div>
          <h3>
            {this.state.todo}
            <span style={{color: `${this.state.priority}`}}> ◉</span>
          </h3>
        </div>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch(toggleComplete(id))
})

export default connect(null, mapDispatchToProps)(ToDo)