import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { useGetLeaguesQuery } from '../services/volleyApi'
import { useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'

export const Route = createFileRoute('/leagues/')({
  component: RouteComponent,
})

const MIN_SEARCH_LENGTH = 3

function RouteComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const { isFetching, isError, isSuccess, data } = useGetLeaguesQuery(
    {
      'x-rapidapi-key': import.meta.env.VITE_VOLLEY_API_X_RAPID_API_KEY,
      search: debouncedSearchTerm,
    },
    { skip: debouncedSearchTerm.length < MIN_SEARCH_LENGTH },
  )

  return (
    <div>
      <label>Search: </label>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      {isError && <div>Error</div>}
      {isFetching && <div>Loading...</div>}
      {isSuccess && (
        <ul>
          {data?.response.map((league) => (
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
      )}
    </div>
  )
}
