
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/user.reducer";
import { userApi } from "./Api/user.api";
import {profileApi} from "./Api/profile.api"
export const store = configureStore({
    reducer: { 

        [profileApi.reducerPath]: profileApi.reducer,
        [userReducer.name]:userReducer.reducer,
        [userApi.reducerPath]: userApi.reducer
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware,profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

