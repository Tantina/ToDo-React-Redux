import React, { PropTypes, Component } from 'react'
import { ENTER_KEY, ESCAPE_KEY } from '../constants/KeyCodes'

export default class TodoText extends Component {
  constructor(props) {
    super(props)

    this.state = {text: this.props.task.text}

    this.setNewValue = this.setNewValue.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onInputSubmit = this.onInputSubmit.bind(this)
  }

  setNewValue() {
    const text = this.state.text.trim()

    if (text){
      this.props.actions.editTask(this.props.task.id, text)
      this.setState({ text: text})
      this.props.onModeSave()
    } else {
      this.props.actions.removeTask(this.props.task.id)
    }
  }

  onInputChange(e) {
    this.setState({text: e.target.value})
  }

  onInputSubmit(e) {
    if (e.which === ENTER_KEY) {
        this.setNewValue()
    }

    if (e.which === ESCAPE_KEY) {
      this.props.onModeSave()
    }
  }

  render() {
    return (
      <input type="text"
             className="form-control"
             autoFocus="true"
             value={this.state.text}
             onBlur={this.setNewValue}
             onChange={this.onInputChange}
             onKeyDown={this.onInputSubmit} />
    )
  }
}
