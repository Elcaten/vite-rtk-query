import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { useGetLeaguesQuery } from '../services/volleyApi'

export const Route = createFileRoute('/leagues/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { isLoading, isError, data } = useGetLeaguesQuery({
    'x-rapidapi-key': import.meta.env.VITE_VOLLEY_API_X_RAPID_API_KEY,
    search: 'Italia',
  })

  if (isLoading) {
    return '...Loading'
  }

  if (isError) {
    return 'Error'
  }

  return (
    <div>
      {data?.response.map((league) => (
        <Link
          key={league.id}
          to={`/leagues/$leagueId`}
          params={{ leagueId: league.id.toString() }}
        >
          {league.name}
        </Link>
      ))}
    </div>
  )
}
