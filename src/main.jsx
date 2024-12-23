// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './app/App'
// import { Provider } from 'react-redux'
// import { store } from './redux/store'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './styles/index.sass'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
