import { createFileRoute, Link } from '@tanstack/react-router'
import { volleyApi } from '../services/volleyApi'
import { loadQuery } from '../utils/loadQuery'

export const Route = createFileRoute('/leagues/$leagueId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const queryData = await loadQuery(volleyApi.endpoints.getLeagues, {
      id: Number(params.leagueId),
    })
    const league = queryData.data?.response?.[0]
    if (!league) {
      throw Error(`League with id ${params.leagueId} not found`)
    }
    return league
  },
})

function RouteComponent() {
  const league = Route.useLoaderData()

  return (
    <div>
      <Link to="/leagues">Back</Link>
      <div>{league.name}</div>
      <label>Seasons</label>
      <ul>
        {league.seasons
          .toSorted((a, b) => a.season - b.season)
          .map((season) => (
            <li key={season.season}>
              <Link
                to="/standings"
                search={{ leagueId: league.id, season: season.season }}
              >
                {season.season}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
