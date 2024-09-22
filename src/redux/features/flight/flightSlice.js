import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../../../utils/fetchStates";

const initialState = {
    flights : [],
    usersFlights: [],
    fetchStates: fetchStates.NOT_FETCHED
};

export const flightSlice = createSlice({
    name: "flight",
    initialState,
    reducers: {
        setFlights: (state, action) => {
            return {
                ...state,
                flights: [...action.payload]
            };
        },
        setUsersFlights: (state, action) => {
            return {
                ...state,
                usersFlights: [...action.payload]
            };
        },
        changeFetchState: (state, action) => {
            state.fetchStates = action.payload;
        },
    },
});

export const { setFlights, setUsersFlights, changeFetchState } = flightSlice.actions;

export default flightSlice.reducer;
