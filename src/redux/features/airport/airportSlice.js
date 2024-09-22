import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../../../utils/fetchStates";

const initialState = {
    airports : [],
    fetchStates: fetchStates.NOT_FETCHED
};

export const airportSlice = createSlice({
    name: "airport",
    initialState,
    reducers: {
        setAirports: (state, action) => {
            return {
                ...state,
                airports: [...action.payload]
            };
        },
        changeFetchState: (state, action) => {
            state.fetchStates = action.payload;
        },
    },
});

export const { setAirports, changeFetchState } = airportSlice.actions;

export default airportSlice.reducer;
