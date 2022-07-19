import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/api' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => `/employee`,
    }),
    getEmployeeByID: builder.query({
        query: (id) => `/employee/${id}`,
    }),
    createEmployee: builder.mutation({
        query: (post) => {
            console.log(post);
            return ({ url: `/employee`, method: 'POST', body: post})},
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmployeesQuery, useGetEmployeeByIDQuery, useCreateEmployeeMutation } = employeeApi