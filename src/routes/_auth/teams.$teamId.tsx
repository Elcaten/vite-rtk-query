import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/teams/$teamId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/teams/{Route.useParams().teamId}</div>
}
