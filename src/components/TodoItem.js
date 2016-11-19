import React, { PropTypes, Component } from 'react'
import TodoText from './TodoText'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editable: false
  }

  this.onModeEdit = this.onModeEdit.bind(this)
  this.onModeSave = this.onModeSave.bind(this)
}

  onModeEdit(e) {
    this.setState({
      editable: true
    })
  }

  onModeSave() {
    this.setState({
      editable: false
    })
  }

  render() {
    const {task, actions} = this.props
    const {editable} = this.state
    let inputMode = ( editable )
    ? <TodoText task={task} actions={actions} onModeSave={this.onModeSave}/>
    : <label htmlFor={task.id} onDoubleClick={this.onModeEdit}>{task.text}</label>

    return (

      <li className={"list-group-item" + (task.completed ? " active" : "")}>
        <input id={task.id}
               type="checkbox"
               hidden = {editable ? true : false}
               className="align-middle mr-1"
               checked={task.completed}
               onChange={() => actions.toggleTask(task.id)} />
        {inputMode}
        <button type="button"
                className="btn close"
                hidden = {editable ? true : false}
                aria-label="Close"
                onClick={() => actions.removeTask(task.id)}>
                <span aria-hidden="true">&times;</span>
        </button>
      </li>
    )
  }
}
