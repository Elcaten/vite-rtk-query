import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from 'redux'

import { volleyApi } from './services/volleyApi'
import { ynabApi } from './services/ynabApi'
import { splitwiseApi } from './services/splitwiseApi'
export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      volleyApi.middleware,
      ynabApi.middleware,
      splitwiseApi.middleware,
    ]),
  reducer: combineReducers({
    [volleyApi.reducerPath]: volleyApi.reducer,
    [ynabApi.reducerPath]: ynabApi.reducer,
    [splitwiseApi.reducerPath]: splitwiseApi.reducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
