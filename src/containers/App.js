import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import MainContent from '../components/MainContent'
import {SHOW_ALL} from '../constants/TodoFilters'


class App extends Component {

  render(){
    const {tasks, actions, filter} = this.props
    return (
      <div className="my-3">
        <MainContent tasks={tasks} actions={actions} filter={this.props.params.filter || SHOW_ALL}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
