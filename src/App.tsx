import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import './features/Counter/index.module.css'
import { store } from './store'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <RouterProvider router={router} />
    </ReduxStoreProvider>
  )
}

export default App
