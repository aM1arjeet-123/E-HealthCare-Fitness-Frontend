import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlic";
import profileReducer from "../slices/profileSlice"
import courseReducer from "../slices/courseSlice"
import cartReducer from "../slices/cartSlice"
import viewSlice from "../slices/viewSlice"

const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer,
    course: courseReducer,
    cart:cartReducer,
    viewCourse:viewSlice

})

export default rootReducer;