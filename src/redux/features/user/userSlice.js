import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../../../utils/fetchStates";

const initialState = {
    user: {},
    fetchStates: fetchStates.NOT_FETCHED
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user: {...action.payload}
            }
        },
        changeFetchState: (state, action) => {
            state.fetchStates = action.payload;
        },
    },
});

export const { setUser, changeFetchState } = userSlice.actions;

export default userSlice.reducer;
