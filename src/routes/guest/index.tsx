import { createFileRoute, redirect } from '@tanstack/react-router'
import LoginButton from '../../features/session/login/login.ui'

export const Route = createFileRoute('/guest/')({
  beforeLoad: async ({ context, location }) => {
    const auth = await context.auth.promise

    if (auth.isAuthenticated) {
      throw redirect({
        to: '/dashboard',
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
    <div>
      <div>Please login</div>
      <LoginButton />
    </div>
  )
}
