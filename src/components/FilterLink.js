import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { SHOW_ALL } from '../constants'

const { string } = PropTypes

export const FilterLink = (props) => {
  const { filter } = props
  return (
    <Link
      to={filter.type === SHOW_ALL ? '' : filter.type}
      className="btn btn-outline-primary"
      activeClassName="active"
    >
      {filter.text}
    </Link>
  )
}

FilterLink.propTypes = {
  filter: string.isRequired
}
