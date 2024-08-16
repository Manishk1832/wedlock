import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/user/',
    credentials: 'include',  
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).user.accessToken;
      if (accessToken) {
        headers.set('Authorization', accessToken);
      }
   
      return headers;
    }, 
  }),
  tagTypes: ['User'],

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: 'registration',
        method: 'POST',
        body: user,
      }),

    }),

    verifyOtp:builder.mutation({
      query : (data)=> ({
        url:'activate-user',
        method:'POST',
        body: data
      })
    }),

    setPassword:builder.mutation({
      query : (data)=> ({
        url:'set-password',
        method:'POST',
        body: data
      })
    })

  }),

});

export const { useRegisterUserMutation,useVerifyOtpMutation,useSetPasswordMutation} = userApi;
