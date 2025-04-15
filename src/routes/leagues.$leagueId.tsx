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

  return (
    <div>
      <Link to="/leagues">Back</Link>
      <div>Hello {leagueId}!</div>
      <div>
        <JsonView src={data?.response[0] ?? {}} />
      </div>
    </div>
  )
}
