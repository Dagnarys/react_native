import {createSlice} from "@reduxjs/toolkit";
import {Drivers} from "../Types";

const initialState = {
    name: ""
};

const driver_object = createSlice({
    name: "search_driver",
    initialState: initialState,
    reducers: {
        updateDriver: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const {updateDriver} = driver_object.actions;

export default driver_object.reducer;