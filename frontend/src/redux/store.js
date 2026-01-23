import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slice"
import userReducer from "./userslice"



const store = configureStore({
    reducer:{
        itemInfo: itemReducer,
        userInfo: userReducer
    }
})

export default store;