import {
  createFileRoute,
  Link,
  useNavigate,
  useRouter,
} from '@tanstack/react-router'
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
  loader: async ({ deps: { filter } }) => {
    const result = await store.dispatch(
      volleyApi.endpoints.getLeagues.initiate({
        search: filter,
      }),
    )

    if (result.isError) {
      throw result.error
    }

    return result
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter()

    return (
      <article>
        <p>{error.message}</p>
        <button
          onClick={() => {
            // Invalidate the route to reload the loader, which will also reset the error boundary
            router.invalidate()
          }}
        >
          retry
        </button>
      </article>
    )
  },
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
