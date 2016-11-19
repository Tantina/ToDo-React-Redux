import {ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO, REMOVE_COMPLETED, COMPLETE_ALL} from '../constants/ActionTypes'
import {SET_FILTER} from '../constants/TodoFilters'

let nextTodoId = 0;

export function addTask( text ){
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function removeTask( id ){
  return {
    type: REMOVE_TODO,
    id
  }
}

export function editTask( id, text ){
  return {
    type: EDIT_TODO,
    id,
    text
  }
}

export function toggleTask( id ){
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function removeCompleted(){
  return {
    type: REMOVE_COMPLETED
  }
}

export function completeAll(){
  return {
    type: COMPLETE_ALL
  }
}
