import { createFileRoute, Link } from '@tanstack/react-router'
import { useGetStandingsQuery } from '../services/volleyApi'

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

  const standings = data?.response.flat()

  if (!standings) {
    return 'Standings not found'
  }

  return (
    <div>
      <Link
        to="/leagues/$leagueId"
        params={{ leagueId: search.leagueId.toString() }}
      >
        Back
      </Link>
      <img src={standings[0].league.logo} style={{ display: 'block' }} />
      <table>
        <tr>
          <th></th>
          <th>Team</th>
          <th>W</th>
          <th>L</th>
          <th>Pts</th>
        </tr>

        {standings.map((standing) => (
          <tr key={standing.league.id}>
            <td>{standing.position}</td>
            <td>
              <img src={standing.team.logo} style={{ height: '32px' }} />{' '}
              {standing.team.name}
            </td>
            <td>{standing.games.win.total}</td>
            <td>{standing.games.lose.total}</td>
            <td>{standing.games.played}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
