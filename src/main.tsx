import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'react18-json-view/src/style.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)

if (process.env.NODE_ENV === 'development' && import.meta.env.ENABLE_MOCK) {
  // Prepare MSW in a Service Worker
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start()
    })
    // Launched mock server, and then start client React app
    .then(() => root.render(<App />))
} else {
  // Production
  root.render(<App />)
}
