// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const ynabApiBase = createApi({
  reducerPath: 'ynabApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_YNAB_API_BASE_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_YNAB_API_KEY}`,
    },
  }),
  endpoints: () => ({}),
})
