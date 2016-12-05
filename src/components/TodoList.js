import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const { array, object } = PropTypes

export const TodoList = (props) => {
  const { tasks, actions } = props
  return (
    <ul className="list-group mb-1">
      {tasks.map(task =>
        <TodoItem
          key={task.id}
          task={task}
          actions={actions}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  tasks: array.isRequired,
  actions: object.isRequired
}
