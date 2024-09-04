import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.vigorify.in/api/v1/user/',
    credentials: 'include',  
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).userReducer.accessToken;
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
    }),

     login: builder.mutation({
      query: (user) => ({
        url: 'login',
        method: 'POST',
        body: user, 
      }),
    }),

    forgotpassword:builder.mutation({
      query:(email)=>({
        url: 'forgot-password',
        method: 'POST',
        body: email
      })
    }),

    verify:builder.mutation({
      query:(data) => ({
        url: 'verify-otp',
        method: 'POST',
        body: data

      })
    }),

    resetpassword:builder.mutation({
      query:(data) =>({
        url: 'reset-password',
        method: 'POST',
        body: data

      })

    }),



    logout: builder.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),




  }),

});

export const { useRegisterUserMutation,useVerifyOtpMutation,useSetPasswordMutation,useLoginMutation,useLogoutMutation,useForgotpasswordMutation,useVerifyMutation,useResetpasswordMutation} = userApi;
