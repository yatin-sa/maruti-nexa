import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  accessToken: null,
  adminAccessToken: null,
  filter: "",
  pratham:false
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      localStorage.setItem("token", accessToken);
      state.accessToken = accessToken;
    },
    setAdminAccessToken: (state, action) => {
      state.adminAccessToken = action.payload;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      state.accessToken = null;
    },
    setFilter: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload;
    },
    setPrathamLO: (state, action) => {
      const {pratham } = action.payload;
      state.pratham = pratham;
    },
    
  },
});

export const { setCredentials, logOut, setFilter, setAdminAccessToken,setPrathamLO } =
  authSlice.actions;
export default authSlice.reducer;
export const getCredentials = (state) => state.auth;
export const getAdminAccessToken = (state) => state.auth.adminAccessToken;
export const getFilter = (state) => state.auth.filter;
export const getPratham = (state) => state.auth.pratham;
