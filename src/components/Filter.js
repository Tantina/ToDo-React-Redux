import React from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants'
import { FilterLink } from '../components/FilterLink'

const TODO_FILTERS = [
  {
    type: SHOW_ALL,
    text: 'All'
  },
  {
    type: SHOW_ACTIVE,
    text: 'Active'
  },
  {
    type: SHOW_COMPLETED,
    text: 'Completed'
  }
]

export const Filter = () => (
  <div className="btn-group float-md-right">
    {TODO_FILTERS.map(f =>
      <FilterLink key={f.type} filter={f} />
    )}
  </div>
)
