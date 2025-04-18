import {
  ApiEndpointQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/query'
import { store } from '../store'

type ApiEndpoint<T, U> = ApiEndpointQuery<
  QueryDefinition<
    T,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    never,
    U,
    string
  >,
  any
>

export async function loadQuery<T, U>(endpoint: ApiEndpoint<T, U>, params: T) {
  const result = await store.dispatch(endpoint.initiate(params))

  if (result.isError) {
    throw result.error
  }

  return result
}
