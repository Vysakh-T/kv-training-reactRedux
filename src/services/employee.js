import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3002/api' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => `/employee`,
      providesTags: ['empDetails'],
    }),
    getEmployeeByID: builder.query({
        query: (id) => `/employee/${id}`,
    }),
    createEmployee: builder.mutation({
        query: (post) => {
            return ({ url: `/employee`, method: 'POST', body: post})},
        invalidatesTags: ['empDetails'],
    }),
    deleteEmployeeByID: builder.mutation({
      query: (id) => {
          return ({ url: `/employee/${id}`, method: 'DELETE'})},
      invalidatesTags: ['empDetails'],
  }),
    updateEmployeeByID: builder.mutation({
      query: ({id, post}) => {
        console.log('hi')
          console.log(post)
          return ({ url: `/employee/${id}`, method: 'PUT', body: post})},
      invalidatesTags: ['empDetails'],
  }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmployeesQuery, useGetEmployeeByIDQuery, useCreateEmployeeMutation, useDeleteEmployeeByIDMutation, useUpdateEmployeeByIDMutation,useLazyGetEmployeesQuery } = employeeApi