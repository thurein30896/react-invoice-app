import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "animate.css"
import DataContextProvider from './Contexts/DataContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
)
