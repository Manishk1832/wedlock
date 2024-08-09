// "use client"
// import { createSlice } from '@reduxjs/toolkit';
// // import { cookies } from 'next/headers';

// const accessToken = cookies().get('accessToken')?.value || null;
// const refreshToken = cookies().get('refreshToken')?.value || null;
// const role = cookies().get('role')?.value || null;

// const initialState = {
//     user: {
//         id: null,
//         email: '',
//         userId: '',
//         usertype: '',
//         isVerified: false,
//         isPersonalFormFilled: false,
//         isQualificationFormFilled: false,
//         isLocationFormFilled: false,
//         isOtherFormFilled: false,
//         isImageFormFilled: false,
//         role: '',
//         createdAt: '',
//         updatedAt: ''
//     },
//     accessToken: accessToken,
//     refreshToken: refreshToken,
//     role: role
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             state.user = action.payload;
//         },
//         setAccessToken: (state, action) => {
//             state.accessToken = action.payload;
//         },
//         setRefreshToken: (state, action) => {
//             state.refreshToken = action.payload;
//         },
//         setRole: (state, action) => {
//             state.role = action.payload;
//         },
//         logout: (state) => {
//             state.user = initialState.user;
//             state.accessToken = null;
//             state.refreshToken = null;
//             state.role = null;
//         }
//     }
// });

// export const { setUser, setAccessToken, setRefreshToken, setRole, logout } = userSlice.actions;
// export default userSlice.reducer;
