import { createFileRoute, Link } from '@tanstack/react-router'
import { volleyApi } from '../../services/volleyApi'
import { loadQuery } from '../../utils/loadQuery'

export const Route = createFileRoute('/_auth/teams/$teamId')({
  loader: async ({ params }) => {
    const queryData = await loadQuery(volleyApi.endpoints.getTeams, {
      id: Number(params.teamId),
    })
    const league = queryData.data?.response?.[0]
    if (!league) {
      throw Error(`League with id ${params.teamId} not found`)
    }
    return league
  },
  component: RouteComponent,
})

function RouteComponent() {
  const team = Route.useLoaderData()

  return (
    <div>
      <Link to="/teams">Back</Link>
      <div>
        <img src={team.logo}></img>
        <div>{team.name}</div>
      </div>
    </div>
  )
}
