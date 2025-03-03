import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info) => {
        console.log(info);
        try {
            // const {data} = await api.post('/admin-login',info,{withCedentials: true})
            // console.log(data)
        } catch (error) {
            
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
