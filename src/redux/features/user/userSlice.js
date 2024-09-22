import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../../../utils/fetchStates";

const initialState = {
    user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
    },
    fetchStates: fetchStates.NOT_FETCHED
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
