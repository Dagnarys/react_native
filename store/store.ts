import { configureStore } from "@reduxjs/toolkit";
import search_driver from "./SearchDriver";

export default configureStore({
    reducer: {
        search_driver: search_driver,
    },
});