import { createFileRoute } from '@tanstack/react-router'
import Profile from '../../features/session/profile/profile.ui'

export const Route = createFileRoute('/_auth/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Profile />
}
