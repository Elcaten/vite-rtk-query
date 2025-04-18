import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div>Not found</div>
      <Link to="/dashboard">Return to dashboard</Link>
    </div>
  )
}
