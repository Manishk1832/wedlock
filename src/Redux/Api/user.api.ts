// "use client"
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { cookies } from 'next/headers'

// const accessToken = cookies().get('accessToken')?.value || null;
// const refreshToken = cookies().get('refreshToken')?.value || null;



// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1', prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as any).user.accessToken;
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//     return headers;
    
//   } }),
 


//   tagTypes: ['User'],


//   endpoints: (builder) => ({
//     getUser: builder.query({
//       query: () => 'user',
//       providesTags: ['User'],
//     }),
//   }),

// });

// export const { useGetUserQuery } = userApi;
