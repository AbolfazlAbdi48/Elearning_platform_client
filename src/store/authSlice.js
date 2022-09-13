import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, loginUser } from "../Services/courseServices";

export const loginFetch = createAsyncThunk(
  "auth/loginFetch",
  async ({ data, navigate }, { dispatch }) => {
    try {
      const response = await loginUser(data);
      if (response.status === 200) {
        localStorage.setItem("token", response?.data?.key);
        const isLoggedInUser = await getCurrentUser(response?.data?.key);
        dispatch(authActions.login(isLoggedInUser?.data));
        navigate("/courses");
      }
      return response;
    } catch (err) {
      return { errors: err?.response?.data };
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, user: {}, loading: false, errors: [] },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
  extraReducers: {
    [loginFetch.pending]: (state) => {
      state.loading = true;
    },
    [loginFetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.errors = action?.payload?.errors;
    },
  },
});

export const authActions = authSlice.actions;
