import type { useAuth0 } from '@auth0/auth0-react'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

interface MyRouterContext {
  auth: PromiseWithResolvers<ReturnType<typeof useAuth0>>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})
