import React, { PropTypes, Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const { tasks, actions } = this.props
    return (
      <ul className="list-group mb-1">
      {tasks.map( task =>
        <TodoItem key={task.id}
                  task={task}
                  actions={actions} />
      )}
      </ul>
    )
  }
}
