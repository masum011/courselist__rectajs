import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchAdminData = createAsyncThunk("admin/data", async () => {
  try {
    const response = await fetch(
      `https://640b149381d8a32198d8fdbb.mockapi.io/api/v1/studens`
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    throw error;
  }
});

export const dashboardSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAdminData.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const { } = dashboardSlice.actions;

export default dashboardSlice.reducer;
