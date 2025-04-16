import { createFileRoute, Link } from '@tanstack/react-router'
import { useGetLeaguesQuery } from '../services/volleyApi'
import JsonView from 'react18-json-view'

export const Route = createFileRoute('/leagues/$leagueId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { leagueId } = Route.useParams()
  const { isError, isLoading, data } = useGetLeaguesQuery({
    'x-rapidapi-key': import.meta.env.VITE_VOLLEY_API_X_RAPID_API_KEY,
    id: Number.parseInt(leagueId),
  })

  if (isLoading) {
    return '...Loading'
  }

  if (isError) {
    return 'Error'
  }

  const league = data?.response[0]

  if (!league) {
    return <div>League not found</div>
  }

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
