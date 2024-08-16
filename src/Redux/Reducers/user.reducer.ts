"use client"
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('accessToken') || null;
const refreshToken = Cookies.get('refreshToken') || null;
const activationToken = Cookies.get('activationToken') || null;
const token = Cookies.get('token') || null;



const initialState = {
    user: {
        id: null,
        email: '',
        userId: '',
        usertype: '',
        isVerified: false,
        isPersonalFormFilled: false,
        isQualificationFormFilled: false,
        isLocationFormFilled: false,
        isOtherFormFilled: false,
        isImageFormFilled: false,
        role: '',
        createdAt: '',
        updatedAt: ''
    },
    accessToken: accessToken,
    refreshToken: refreshToken,
    activationToken: activationToken,
    token: token

};



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActivationToken: (state, action) => {
           const activationToken = state.activationToken = action.payload;
            Cookies.set('activationToken', activationToken);
        },

        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        
        logout: (state) => {
            state.user = initialState.user;
            state.accessToken = null;
            state.refreshToken = null;
        }
    }
});

export const { setUser, setAccessToken, setRefreshToken, logout, setActivationToken } = userSlice.actions;
export default userSlice.reducer;
