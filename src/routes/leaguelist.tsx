import { createFileRoute } from '@tanstack/react-router'
import { useGetLeaguesQuery } from '../services/volleyApi'
import JsonView from 'react18-json-view'

export const Route = createFileRoute('/leaguelist')({
  component: RouteComponent,
})

function RouteComponent() {
  const { isLoading, isError, data } = useGetLeaguesQuery({
    'x-rapidapi-key': import.meta.env.VITE_VOLLEY_API_X_RAPID_API_KEY,
  })

  if (isLoading) {
    return '...Loading'
  }

  if (isError) {
    return 'Error'
  }

  return (
    <div>
      {data?.response.map((league) => <div key={league.id}>{league.name}</div>)}
    </div>
  )
}
