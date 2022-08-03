import {configureStore} from "@reduxjs/toolkit";
import {loadingBarMiddleware, loadingBarReducer} from "react-redux-loading-bar";
import {authSlice} from "./authSlice";
import {coursesFetch, coursesSlice} from "./coursesSlice";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        loadingBar: loadingBarReducer,
        courses: coursesSlice.reducer
    },
    middleware: [thunk, loadingBarMiddleware()],
})

store.dispatch(coursesFetch())