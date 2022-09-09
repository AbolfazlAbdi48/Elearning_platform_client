import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getChapter, getCourse } from "../Services/courseServices";

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

export const chapterContentFetch = createAsyncThunk(
  "course/chapterContent",
  async (chapterId) => {
    try {
      const response = await getChapter(chapterId);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState: { item: {}, loading: false, chapterData: [] },
  reducers: {},
  extraReducers: {
    [courseFetch.pending]: (state) => {
      state.loading = true;
    },
    [courseFetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.item = action.payload;
    },
    [chapterContentFetch.pending]: (state) => {
      state.loading = true;
    },
    [chapterContentFetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.chapterData = action.payload;
    },
  },
});
