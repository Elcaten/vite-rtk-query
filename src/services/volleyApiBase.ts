// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

console.log(import.meta.env.VITE_VOLLEY_API_BASE_URL)

// initialize an empty api service that we'll inject endpoints into later as needed
export const volleyApiBase = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_VOLLEY_API_BASE_URL,
    headers: {
      'x-rapidapi-host': import.meta.env.VITE_VOLLEY_API_X_RAPID_API_HOST,
    },
  }),
  endpoints: () => ({}),
})
