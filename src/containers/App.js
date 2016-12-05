import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { SHOW_ALL } from '../constants'
import MainContent from '../components/MainContent'

const { array, object } = PropTypes

const App = ({ tasks, actions, params }) => (
  <div className="my-3">
    <MainContent
      tasks={tasks}
      actions={actions}
      filter={params.filter || SHOW_ALL}
    />
  </div>
)


App.propTypes = {
  tasks: array.isRequired,
  actions: object.isRequired,
  params: object.isRequired
}

function mapStateToProps(state) {
  return {
    tasks: state.todos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
