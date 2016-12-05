import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import TodoText from './TodoText'

const { object } = PropTypes

export default class TodoItem extends Component {
  static propTypes = {
    task: object.isRequired,
    actions: object.isRequired
  }

  state = {
    editable: false,
  }

  onModeEdit = () => {
    this.setState({
      editable: true,
    })
  }

  onModeSave = () => {
    this.setState({
      editable: false,
    })
  }

  render() {
    const { task, actions } = this.props
    const { editable } = this.state
    const inputMode = (editable)
    ? <TodoText task={task} actions={actions} onModeSave={this.onModeSave} />
    : <label htmlFor={task.id} onDoubleClick={this.onModeEdit}>{task.text}</label>

    return (
      <li className={classNames('list-group-item', { active: task.completed })}>
        <input
          id={task.id}
          type="checkbox"
          hidden={editable}
          className="align-middle mr-1"
          checked={task.completed}
          onChange={() => actions.toggleTask(task.id)}
        />
        {inputMode}
        <button
          type="button"
          className="btn close"
          hidden={editable}
          aria-label="Close"
          onClick={() => actions.removeTask(task.id)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    )
  }
}
