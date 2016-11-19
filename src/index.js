import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './containers/App'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = createStore(
  reducers,
  persistedState
)

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App}/>
    </Router>
  </Provider>,
  document.querySelector('.container')
)
