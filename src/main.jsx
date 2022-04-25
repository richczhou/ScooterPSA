import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Suspense } from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>
)
