import { Auth0Provider } from '@auth0/auth0-react'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { routeTree } from './routeTree.gen'
import { store } from './store'

const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ReduxStoreProvider store={store}>
        <RouterProvider router={router} />
      </ReduxStoreProvider>
    </Auth0Provider>
  )
}

export default App
