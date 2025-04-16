import { createFileRoute, Link } from '@tanstack/react-router'
import { useGetStandingsQuery } from '../services/volleyApi'
import JsonView from 'react18-json-view'

type StandingsSearch =
  | {
      leagueId: number
      season: number
    }
  | undefined

export const Route = createFileRoute('/standings')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): StandingsSearch => {
    const leagueId = Number.parseInt((search?.leagueId as string) ?? '')
    const season = Number.parseInt((search?.season as string) ?? '')

    if (Number.isNaN(leagueId) || Number.isNaN(season)) {
      return undefined
    }

    return {
      leagueId,
      season,
    }
  },
})

function RouteComponent() {
  const search = Route.useSearch()

  if (!search) {
    return 'Standings not found'
  }

  const { isError, isLoading, data } = useGetStandingsQuery(
    {
      'x-rapidapi-key': import.meta.env.VITE_VOLLEY_API_X_RAPID_API_KEY,
      league: search.leagueId,
      season: search.season,
    },
    { skip: !search },
  )

  if (isLoading) {
    return '...Loading'
  }

  if (isError) {
    return 'Error'
  }

  console.log(data)

  return (
    <div>
      <Link
        to="/leagues/$leagueId"
        params={{ leagueId: search.leagueId.toString() }}
      >
        Back
      </Link>
      <div>
        {data?.response.flat().map((standing) => (
          <div key={standing.league.id}>
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                whiteSpace: 'pre',
              }}
            >
              <img src={standing.team.logo} style={{ height: '100%' }} />
              {JSON.stringify(standing, null, 2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
