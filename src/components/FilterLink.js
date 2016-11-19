import React, { Component } from 'react'
import { Link } from 'react-router'
import {SHOW_ALL} from '../constants/TodoFilters'

export default class FilterLink extends Component {
  render() {
  const {filter} = this.props
  return (
    <Link to={ filter.type === SHOW_ALL ? "" : filter.type }
          className="btn btn-outline-primary"
          activeClassName="active">
          {filter.text}
    </Link>
    )
  }
}
