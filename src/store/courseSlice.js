import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCourse } from "../Services/courseServices";

export const courseFetch = createAsyncThunk(
  "course/courseFetch",
  async (courseId) => {
    try {
      const response = await getCourse(courseId);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState: { item: {}, loading: false },
  reducers: {},
  extraReducers: {
    [courseFetch.pending]: (state) => {
      state.loading = true;
    },
    [courseFetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.item = action.payload;
    },
  },
});
