import { AnyAction } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export type AppStateSlice = {
  loading: boolean;
  error: boolean;
  data: Record<any, any>[];
  searchResults: {};
};

export type AppState = {
  app: AppStateSlice;
};

export const initialState: AppStateSlice = {
  loading: false,
  error: false,
  data: [],
  searchResults: {}
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("app/buttonClicked", (state, action) => {});

    builder.addCase("app/pending", (state, action) => {});

    builder.addCase("app/fulfilled", (state, action) => {
      console.log(action.payload);
      return { ...state, data: ["test"] };
    });

    builder.addCase("app/rejected", (state, action) => {});
  }
});
