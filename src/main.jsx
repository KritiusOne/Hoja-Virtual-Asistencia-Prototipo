import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LeafContextProvider } from './context/LeafContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LeafContextProvider>
      <App />
    </LeafContextProvider>
  </React.StrictMode>,
)
