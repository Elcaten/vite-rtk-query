import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { volleyApi } from '../../services/volleyApi'
import { loadQuery } from '../../utils/loadQuery'

export const Route = createFileRoute('/_auth/teams/')({
  component: RouteComponent,
  validateSearch: zodValidator(
    z.object({
      filter: z.string().default(''),
    }),
  ),
  loaderDeps: ({ search: { filter } }) => ({ filter }),
  loader: async ({ deps: { filter } }) =>
    loadQuery(volleyApi.endpoints.getTeams, { search: filter }),
})

function RouteComponent() {
  const teams = Route.useLoaderData()
  const routeSearch = Route.useSearch()

  const navigate = useNavigate({ from: Route.fullPath })
  const [searchTerm, setSearchTerm] = useState(routeSearch.filter)
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    navigate({ to: '/teams', search: { filter: debouncedSearchTerm } })
  }, [debouncedSearchTerm])

  return (
    <div>
      <label>Search: </label>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <ul>
        {teams?.data?.response.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/$teamId`} params={{ teamId: team.id.toString() }}>
              {team.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
