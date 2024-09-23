import { configureStore, Tuple } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "../features/user/userSlice";
import airlineReducer from "../features/airline/airlineSlice";
import airportReducer from "../features/airport/airportSlice";
import flightReducer from "../features/flight/flightSlice";

export const myStore = configureStore({
    reducer: {
        user: userReducer,
        airline: airlineReducer,
        airport: airportReducer,
        flight: flightReducer
    },
    middleware: () => new Tuple(thunk)
});