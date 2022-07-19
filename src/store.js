import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import counterReducer from './features/counter/counterSlice'

import { employeeApi } from './services/employee'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(employeeApi.middleware),
})

setupListeners(store.dispatch)