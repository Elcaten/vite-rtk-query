import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router'
import LogoutButton from '../../features/session/logout/logout.ui'

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context, location }) => {
    const auth = await context.auth.promise

    if (!auth.isAuthenticated) {
      throw redirect({
        to: '/guest',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/$">Home</Link>
          </li>
          <li>
            <Link to="/leagues">Leagues</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>

      {/* <Profile /> */}

      <Outlet />
    </>
  )
}
