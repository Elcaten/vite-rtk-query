import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { volleyApi } from '../services/volleyApi'
import { loadQuery } from '../utils/loadQuery'

export const Route = createFileRoute('/leagues/')({
  component: RouteComponent,
  validateSearch: zodValidator(
    z.object({
      filter: z.string().default(''),
    }),
  ),
  loaderDeps: ({ search: { filter } }) => ({ filter }),
  loader: async ({ deps: { filter } }) =>
    loadQuery(volleyApi.endpoints.getLeagues, { search: filter }),
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
    <main>
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
    </main>
  )
}
