import React, { Component } from 'react'
import { toggleComplete, editTodo } from '../actions'
import { connect } from 'react-redux'
import '../index.css'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      todo: this.props.todo,
      priority: this.props.priority,
      completed: this.props.completed,
      editedTodo: '',
      editedPriority: 'red'
    }
  }

  handleChange = () => {
    this.props.toggleComplete(this.state.id)
    this.setState({
      completed: !this.state.completed
    })
  }

  submitEdit = (e) => {
    e.preventDefault()
    const editedTodo = {
      id: this.state.id,
      todo: this.state.editedTodo,
      priority: this.state.editedPriority,
      completed: this.state.completed
    }
    this.props.editTodo(editedTodo)
    this.hideModal()
    this.setState({
      todo: this.state.editedTodo,
      priority: this.state.editedPriority,
      editedTodo: ''
    })
  }

  showModal = () => {
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  hideModal = () => {
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
  }

  render() {
    return (
      <section>
      <form className='todo-item'>
          <input
            onChange={() => this.handleChange()}
            checked={this.state.completed} 
            type='checkbox'
            name='completed'
          />
        <div>
          <h3 onClick={() => this.showModal()}>
            {this.state.todo}
            <span style={{color: `${this.state.priority}`}}> ◉</span>
          </h3>
        </div>
        </form>
        <section id='modal'>
          <div className='modal-content'>
          <h2 onClick={() => this.hideModal()}>X</h2>
            <form>
              <label>Edit: 
              <input
                type='text'
                placeholder={this.state.todo}
                value={this.state.editedTodo}
                onChange={(e) => this.setState({editedTodo: e.target.value})}
              />
                <select
                  name='priority'
                  value={this.state.priority}
                  onChange={(e) => this.setState({editedPriority: e.target.value})}
                >
                  <option value='red'>High</option>
                  <option value='orange'>Medium</option>
                  <option value='darkgreen'>Low</option>
                </select>
              </label>
              <button onClick={(e) => this.submitEdit(e)}>SUBMIT EDIT</button>
            </form>
            <button>DELETE TODO</button>
          </div>
        </section>
      </section>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch(toggleComplete(id)),
  editTodo: todo => dispatch(editTodo(todo))
})

export default connect(null, mapDispatchToProps)(ToDo)