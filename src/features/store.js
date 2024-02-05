import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contact/contactSlice";
const store = configureStore({
    reducer: {
        contact: contactSlice,
    }
})

export default store