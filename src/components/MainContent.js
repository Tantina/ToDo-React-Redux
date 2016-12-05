import React, { Component, PropTypes } from 'react'

import TodoTextInput from '../components/TodoTextInput'
import { TodoList } from '../components/TodoList'
import Filter from '../components/Filter'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants'

const { array, string, object } = PropTypes

export default class MainContent extends Component {
  static propTypes = {
    tasks: array.isRequired,
    actions: object.isRequired,
    filter: string.isRequired
  }

  getFilteredTasks = (tasks, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return tasks
      case SHOW_COMPLETED:
        return tasks.filter(t => t.completed)
      case SHOW_ACTIVE:
        return tasks.filter(t => !t.completed)
      default:
        return tasks
    }
  }

  render() {
    const { tasks, actions, filter } = this.props
    const filteredTasks = this.getFilteredTasks(tasks, filter)
    const countActiveTasks = this.getFilteredTasks(tasks, SHOW_ACTIVE).length
    const countCompletedTasks = this.getFilteredTasks(tasks, SHOW_COMPLETED).length

    return (
      <div>
        <TodoTextInput addTask={actions.addTask} />
        <div className="mb-1">
          <button
            className="btn btn-link"
            onClick={actions.completeAll}
          >
              Mark all as completed
          </button>
          { countCompletedTasks > 0 &&
            <button
              className="btn btn-link"
              onClick={actions.removeCompleted}
            >
              Remove all completed
            </button>
           }
          <Filter tasks={tasks} actions={actions} filter={filter} />
        </div>
        <TodoList tasks={filteredTasks} actions={actions} />
        <p className="pl-2">{countActiveTasks} {countActiveTasks === 1 ? 'task' : 'tasks'} left</p>
      </div>
    )
  }
}
