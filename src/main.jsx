import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { rootReducer } from './features/'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


const STORE = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: rootReducer,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Provider store={STORE}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
)
