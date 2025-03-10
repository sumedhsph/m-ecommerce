import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info) => {
        console.log("Info>>>",info);
        try {
            const {data} = await api.post('/admin-login',info,{withCredentials: true})
            console.log("trycatch data from API", data)
        } catch (error) {
            console.log(error.response.data);
        }
    }
)

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    // You can define your reducers here if needed
  },
  extraReducers: (builder) => {
    // You can add extra reducers here using the builder callback notation
    // Example:
    // builder.addCase(someAction.fulfilled, (state, action) => {
    //   state.someProperty = action.payload;
    // });
  },
});

export default authReducer.reducer;
