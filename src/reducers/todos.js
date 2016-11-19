import {ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO, REMOVE_COMPLETED, COMPLETE_ALL} from '../constants/ActionTypes'


export default ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_TODO:
      return [
        {
          text: action.text,
          completed: false,
          id: action.id,
        },
        ...state
      ]
    case REMOVE_TODO:
      return state.filter( task => task.id != action.id )
    case EDIT_TODO:
      return state.map( task =>
        task.id === action.id
        ? Object.assign( {}, task, {text:action.text} )
        : task )
    case TOGGLE_TODO:
      return state.map( task =>
        task.id === action.id
        ?  Object.assign( {}, task, {completed: !task.completed} )
        : task )
    case REMOVE_COMPLETED:
      return state.filter( task => task.completed === false )
    case COMPLETE_ALL:
      return state.map( task => Object.assign( {}, task, {completed:true} ) )
    default:
      return state;
  }
}
