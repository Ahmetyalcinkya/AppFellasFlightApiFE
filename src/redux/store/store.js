import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "../features/user/userSlice";

export const myStore = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: [thunk]
});