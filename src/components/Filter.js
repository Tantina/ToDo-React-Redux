import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters'
import FilterLink from '../components/FilterLink'

const TODO_FILTERS = [
  {
    type: SHOW_ALL,
    text:'All'
  },
  {
    type: SHOW_ACTIVE,
    text:'Active'
  },
  {
    type: SHOW_COMPLETED,
    text:'Completed'
  }
]

export default class Filter extends Component {
  render() {
    const {actions, filter} = this.props

    return (
      <div className="btn-group float-md-right">
        {TODO_FILTERS.map( f =>
          <FilterLink key={f.type} filter={f} />
        )}
      </div>
    )
  }
}
