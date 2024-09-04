"use client"
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


const accessToken = Cookies.get('access_token') || null;
const refreshToken = Cookies.get('refresh_token') || null;
console.log(accessToken,"accessToken from cookie");

const activationToken = Cookies.get('activationToken') || null;
const token = Cookies.get('token') || null;





const initialState = {
    user:null,
    accessToken : accessToken,
    refreshToken: refreshToken,
    activationToken: activationToken,
    token: token,
    isPersonalFormFilled : false, 
    isQualificationFormFilled : false,
    isOtherFormFilled : false,
    isLocationFormFilled : false,
    isImageFormFilled : false,

};




const userSlice = createSlice({
    name: 'userReducer',
    initialState,

    
    reducers: {
        setActivationToken: (state, action) => {
           const activationToken = state.activationToken = action.payload;
            Cookies.set('activationToken', activationToken);
        },

        setUser: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.accessToken = accessToken;
           const isLocationFormFilled =  state.isLocationFormFilled = user?.isLocationFormFilled ?? false;
            Cookies.set('isLocationFormFilled', isLocationFormFilled);

          const isPersonalFormFilled =  state.isPersonalFormFilled = user?.isPersonalFormFilled ?? false;
            Cookies.set('isPersonalFormFilled', isPersonalFormFilled);
         const isQualificationFormFilled =  state.isQualificationFormFilled = user?.isQualificationFormFilled ?? false;
        Cookies.set('isQualificationFormFilled', isQualificationFormFilled);
            
          const isOtherFormFilled =  state.isOtherFormFilled = user?.isOtherFormFilled ?? false;
        Cookies.set('isOtherFormFilled', isOtherFormFilled);
       const isImageFormFilled =     state.isImageFormFilled = user?.isImageFormFilled ?? false;
        Cookies.set('isImageFormFilled', isImageFormFilled);


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

export const { setUser, setRefreshToken, logout, setActivationToken } = userSlice.actions;
export default userSlice;
