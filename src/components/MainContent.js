import React, { PropTypes, Component } from 'react'

import TodoTextInput from '../components/TodoTextInput'
import TodoList from '../components/TodoList'
import Filter from '../components/Filter'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, REMOVE_COMPLETED, COMPLETE_ALL } from '../constants/TodoFilters'


export default class MainContent extends Component {
  constructor( props ) {
    super( props )

    this.getFilteredTasks = this.getFilteredTasks.bind( this )
  }


  getFilteredTasks ( tasks, filter ) {
    switch ( filter ) {
      case SHOW_ALL:
        return tasks
      case SHOW_COMPLETED:
        return tasks.filter( t => t.completed )
      case SHOW_ACTIVE:
        return tasks.filter( t => !t.completed )
    }
  }

  render() {
    const { tasks, actions, filter } = this.props
    const filteredTasks = this.getFilteredTasks( tasks, filter )
    const countActiveTasks = this.getFilteredTasks( tasks, SHOW_ACTIVE ).length
    const countCompletedTasks = this.getFilteredTasks( tasks, SHOW_COMPLETED ).length
    let removeCompletedBtn = null

    if ( countCompletedTasks > 0 ) {
      removeCompletedBtn = <button className="btn btn-link"
                                   onClick={ actions.removeCompleted }>
                                   Remove all completed
                           </button>
    }

    return(
      <div>
        <TodoTextInput addTask={ actions.addTask }/>
        <div className="mb-1">
          <button className="btn btn-link" onClick={ actions.completeAll }>Mark all as completed</button>
          {removeCompletedBtn}
          <Filter tasks={ tasks } actions={ actions } filter={ filter } />
        </div>
        <TodoList tasks={ filteredTasks } actions={ actions }/>
        <p className="pl-2">{ countActiveTasks + ( countActiveTasks === 1 ? " task" : " tasks" ) + " left" }</p>
      </div>
    )
  }
}
