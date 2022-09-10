import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCourses } from "../Services/courseServices";

export const coursesFetch = createAsyncThunk(
  "courses/coursesFetch",
  async () => {
    try {
      const response = await getCourses();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState: { coursesList: [], loading: false },
  reducers: {},
  extraReducers: {
    [coursesFetch.pending]: (state) => {
      state.loading = true;
    },
    [coursesFetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.coursesList = action.payload;
    },
  },
});

export const coursesActions = coursesSlice.actions;
