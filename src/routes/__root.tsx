import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import LoginButton from '../features/session/login/login.ui'
import LogoutButton from '../features/session/logout/logout.ui'
import Profile from '../features/session/Profile'

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
          <li>
            <LoginButton />
            <LogoutButton />
          </li>
        </ul>
      </nav>

      <Profile />

      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})
