import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

 export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.vigorify.in/api/v1/profile/',
    credentials: 'include', // send cookies with request
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).userReducer.accessToken;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['profile'],
  endpoints: (builder) => ({
    myDetails: builder.query<void, void>({
      query: () => ({
        url: 'mydetails',
      }),
      providesTags: ['profile'],
    }),

    updatePersonalDetails: builder.mutation({
      query: (data) => ({
        url: 'updatePersonalDetails',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    updateFamilyDetails: builder.mutation({
      query: (data) => ({
        url: 'updateFamilyDetails',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    updatePersonalBackground: builder.mutation({
      query: (data) => ({
        url: 'updatePersonalBackground',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),
    
    updateReligiousBackground: builder.mutation({
      query: (data) => ({
        url: 'updateReligiousBackground',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    updateLocationDetails: builder.mutation({
      query: (data) => ({
        url: 'updateLocationDetails',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    updateEducationAndFinancialDetails: builder.mutation({
      query: (data) => ({
        url: 'updateEducationAndFinancialDetails',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    getProfiles : builder.query({
      query: () => ({
        url: 'getProfiles',
      }),
      providesTags: ['profile'],
    }),

    userByid: builder.mutation({
      query: (id) => ({
        url: '/getUserDetails',
        method: 'POST',
        body: { id },
      }),
      invalidatesTags: ['profile'],
      
    })
    
  }),
 
  
});

 export const { useMyDetailsQuery,useUpdateEducationAndFinancialDetailsMutation,useUpdateFamilyDetailsMutation,useUpdateLocationDetailsMutation,useUpdatePersonalBackgroundMutation,useUpdatePersonalDetailsMutation,useUpdateReligiousBackgroundMutation,useGetProfilesQuery,useUserByidMutation } = profileApi;

