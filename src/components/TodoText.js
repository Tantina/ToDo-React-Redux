import React, { Component, PropTypes } from 'react'
import { ENTER_KEY, ESCAPE_KEY } from '../constants'

const { func, object } = PropTypes

export default class TodoText extends Component {
  static propTypes = {
    actions: object.isRequired,
    task: object.isRequired,
    onModeSave: func.isRequired
  }

  state = {
    text: this.props.task.text
  }

  onInputChange = (e) => {
    this.setState({ text: e.target.value })
  }

  onInputSubmit = (e) => {
    if (e.which === ENTER_KEY) {
      this.setNewValue()
    }

    if (e.which === ESCAPE_KEY) {
      this.props.onModeSave()
    }
  }

  setNewValue = () => {
    const { text } = this.state
    const { editTask } = this.props.actions

    if (text.trim()) {
      editTask(this.props.task.id, text)
      this.setState({ text })
      this.props.onModeSave()
    } else {
      this.props.actions.removeTask(this.props.task.id)
    }
  }

  render() {
    return (
      <input
        type="text"
        className="form-control"
        autoFocus="true"
        value={this.state.text}
        onBlur={this.setNewValue}
        onChange={this.onInputChange}
        onKeyDown={this.onInputSubmit}
      />
    )
  }
}
