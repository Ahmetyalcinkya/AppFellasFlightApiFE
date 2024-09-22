import { configureStore, Tuple } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "../features/user/userSlice";
import airlineReducer from "../features/airline/airlineSlice";

export const myStore = configureStore({
    reducer: {
        user: userReducer,
        airline: airlineReducer
    },
    middleware: () => new Tuple(thunk)
});