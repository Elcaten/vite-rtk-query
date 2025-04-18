import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leagues">Leagues</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})
