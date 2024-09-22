import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../../../utils/fetchStates";

const initialState = {
    airlines : [],
    fetchStates: fetchStates.NOT_FETCHED
};

export const airlineSlice = createSlice({
    name: "airline",
    initialState,
    reducers: {
        setAirlines: (state, action) => {
            return {
                ...state,
                airlines: [...action.payload]
            };
        },
        changeFetchState: (state, action) => {
            state.fetchStates = action.payload;
        },
    },
});

export const { setAirlines, changeFetchState } = airlineSlice.actions;

export default airlineSlice.reducer;
