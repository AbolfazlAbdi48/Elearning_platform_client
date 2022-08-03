import {configureStore} from "@reduxjs/toolkit";
import {loadingBarMiddleware, loadingBarReducer} from "react-redux-loading-bar";
import {authSlice} from "./authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        loadingBar: loadingBarReducer
    },
    middleware: [loadingBarMiddleware()]
})