// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const splitwiseApiBase = createApi({
  reducerPath: 'splitwiseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SPLITWISE_PROXY_BASE_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SPLITWISE_API_KEY}`,
    },
  }),
  endpoints: () => ({}),
})
