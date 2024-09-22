import { configureStore, Tuple } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "../features/user/userSlice";
import airlineReducer from "../features/airline/airlineSlice";
import airportReducer from "../features/airport/airportSlice";

export const myStore = configureStore({
    reducer: {
        user: userReducer,
        airline: airlineReducer,
        airport: airportReducer
    },
    middleware: () => new Tuple(thunk)
});