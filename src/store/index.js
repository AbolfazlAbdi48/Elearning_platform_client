import { configureStore } from "@reduxjs/toolkit";
import {
  loadingBarMiddleware,
  loadingBarReducer,
} from "react-redux-loading-bar";
import { authSlice } from "./authSlice";
import { coursesFetch, coursesSlice } from "./coursesSlice";
import thunk from "redux-thunk";
import { courseSlice } from "./courseSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loadingBar: loadingBarReducer,
    courses: coursesSlice.reducer,
    course: courseSlice.reducer,
  },
  middleware: [thunk, loadingBarMiddleware()],
});

store.dispatch(coursesFetch());
