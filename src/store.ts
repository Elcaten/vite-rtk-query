import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from 'redux'

import counterReducer from './features/Counter/counterSlice'
import { docsApi } from './services/docs'
import { volleyApi } from './services/volleyApi'

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([docsApi.middleware, volleyApi.middleware]),
  reducer: combineReducers({
    counter: counterReducer,
    [docsApi.reducerPath]: docsApi.reducer,
    [volleyApi.reducerPath]: volleyApi.reducer,
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
