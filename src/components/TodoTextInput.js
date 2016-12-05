import React, { Component, PropTypes } from 'react'

const placeholder = 'Enter your task'
const { func } = PropTypes

export default class TodoTextInput extends Component {
  static propTypes = {
    addTask: func.isRequired
  }
  state = { text: '' }

  onInputChange = (e) => {
    this.setState({ text: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault()

    const text = this.state.text.trim()
    if (text) {
      this.props.addTask(text)
      this.setState({ text: '' })
    }
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          className="form-control mb-2"
          placeholder={placeholder}
          autoFocus="true"
          value={this.state.text}
          onChange={this.onInputChange}
        />
      </form>
    )
  }
}
