import {configureStore} from "@reduxjs/toolkit"
import { citiesAPI } from "./actions/citiesAPI"
// import { activitiesAPI } from "./actions/activitiesAPI"
// import { commentsAPI } from "./actions/commentsAPI"
import { itinerariesAPI } from "./actions/itinerariesAPI"
import { usersAPI } from "./actions/usersAPI"
import userReducer from "./user/userSlice"
export const store = configureStore({
    reducer:{
            [citiesAPI.reducerPath] : citiesAPI.reducer,
            // [commentsAPI.reducerPath]: commentsAPI.reducer,
            // [activitiesAPI.reducerPath]: activitiesAPI.reducer, 
            [usersAPI.reducerPath]: usersAPI.reducer,
            user: userReducer,
            [itinerariesAPI.reducerPath]: itinerariesAPI.reducer,
        },
        middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
            inmutableCheck:false,
            serializableCheck: false,
        }).concat(citiesAPI.middleware,
            itinerariesAPI.middleware,
            // commentsAPI.middleware,
            // activitiesAPI.middleware,
            usersAPI.middleware
        )
})
