import { createFileRoute, Link } from '@tanstack/react-router'
import { useGetLeaguesQuery } from '../services/volleyApi'

export const Route = createFileRoute('/leagues/$leagueId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { leagueId } = Route.useParams()
  const { isError, isLoading, data } = useGetLeaguesQuery({
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
      <Link to="/leagues" search={{ filter: '' }}>
        Back
      </Link>
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
