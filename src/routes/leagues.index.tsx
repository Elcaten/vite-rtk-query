import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { volleyApi } from '../services/volleyApi'
import { store } from '../store'

type LeaguesSearch = {
  filter: string
}

export const Route = createFileRoute('/leagues/')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): LeaguesSearch => {
    const filter = (search?.filter as string) ?? ''

    return {
      filter,
    }
  },
  loaderDeps: ({ search: { filter } }) => ({ filter }),
  loader: ({ deps: { filter } }) =>
    store.dispatch(
      volleyApi.endpoints.getLeagues.initiate({
        'x-rapidapi-key': import.meta.env.VITE_VOLLEY_API_X_RAPID_API_KEY,
        search: filter,
      }),
    ),
})

function RouteComponent() {
  const leagues = Route.useLoaderData()
  const routeSearch = Route.useSearch()

  const navigate = useNavigate({ from: Route.fullPath })
  const [searchTerm, setSearchTerm] = useState(routeSearch.filter)
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    navigate({ to: '/leagues', search: { filter: debouncedSearchTerm } })
  }, [debouncedSearchTerm])

  return (
    <div>
      <label>Search: </label>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <ul>
        {leagues?.data?.response.map((league) => (
          <li key={league.id}>
            <Link
              to={`/leagues/$leagueId`}
              params={{ leagueId: league.id.toString() }}
            >
              {league.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
