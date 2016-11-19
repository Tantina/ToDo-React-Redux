import React, { Component } from 'react'

const placeholder = 'Enter your task'

export default class TodoTextInput extends Component {
  constructor(props) {
    super(props)

    this.state = {text: ''}

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(e) {
    this.setState({text: e.target.value})
  }

  onFormSubmit(e) {
    e.preventDefault()

    let text = this.state.text.trim()
    if (text){
      this.props.addTask(text)
      this.setState({ text: ''})
    }
  }
  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input type='text'
               className="form-control mb-2"
               placeholder={placeholder}
               autoFocus="true"
               value={this.state.text}
               onChange={this.onInputChange} />
       </form>
    )
  }
}
