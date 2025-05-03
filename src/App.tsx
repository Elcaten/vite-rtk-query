import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import React, { useEffect } from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { routeTree } from './routeTree.gen'
import { store } from './store'

const authPromise = Promise.withResolvers<ReturnType<typeof useAuth0>>()

const router = createRouter({
  routeTree,
  context: {
    auth: authPromise,
  },
  // defaultErrorComponent: (error) => {
  //   return (
  //     <div>
  //       <Link to="/budgets">Go to budgets</Link>
  //       <ErrorComponent {...error} />
  //     </div>
  //   )
  // },
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function RouterWithContext() {
  const auth = useAuth0()

  useEffect(() => {
    if (auth.isLoading) return

    authPromise.resolve(auth)
  }, [auth, auth.isLoading])

  return <RouterProvider router={router} />
}

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <ReduxStoreProvider store={store}>
        <RouterWithContext />
      </ReduxStoreProvider>
    </Auth0Provider>
  )
}

export default App
