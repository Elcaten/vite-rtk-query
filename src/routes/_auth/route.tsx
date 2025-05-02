import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router'
import LogoutButton from '../../features/session/logout/logout.ui'
import { ProfilePicture } from '../../features/session/profilePicture/profilePicture.ui'

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
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/leagues">Leagues</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/budgets">Budgets</Link>
          </li>
        </ul>
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <span
            style={{ height: '60px', overflow: 'hidden', borderRadius: '4px' }}
          >
            <Link to="/profile">
              <ProfilePicture />
            </Link>
          </span>
          <LogoutButton />
        </div>
      </nav>

      {/* <Profile /> */}

      <Outlet />
    </>
  )
}
