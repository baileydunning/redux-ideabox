import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'
import App from './components/App'
import './index.css'

const store = createStore(rootReducer, composeWithDevTools())

const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById('root'))
