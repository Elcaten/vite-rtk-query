import { createFileRoute, Link } from '@tanstack/react-router'
import { splitwiseApi } from '../../services/splitwiseApi'
import { loadQuery } from '../../utils/loadQuery'

export const Route = createFileRoute('/_auth/groups/')({
  component: RouteComponent,
  loader: async () => loadQuery(splitwiseApi.endpoints.getGetGroups, void 0),
})

function RouteComponent() {
  const groups = Route.useLoaderData()

  return (
    <main>
      <ul>
        {groups?.data?.groups?.map((group) => (
          <li key={group.id}>
            <Link
              to="/expenses/$groupId"
              params={{ groupId: group.id?.toString() ?? '' }}
            >
              {group.name}'s' expenses
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
