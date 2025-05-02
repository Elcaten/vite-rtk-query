import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from 'redux'

import { volleyApi } from './services/volleyApi'
import { ynabApi } from './services/ynabApi'

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([volleyApi.middleware, ynabApi.middleware]),
  reducer: combineReducers({
    [volleyApi.reducerPath]: volleyApi.reducer,
    [ynabApi.reducerPath]: ynabApi.reducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
