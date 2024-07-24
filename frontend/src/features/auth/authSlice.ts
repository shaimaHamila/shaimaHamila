import { type RootState } from "../../store/store";
import api from "../../api/AxiosConfig";
import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Admin } from "../../types/Admin";

interface InitialState {
  status: "idle" | "loading" | "failed";
  accessToken: string;
  refreshToken: string;
  user: any;
  error?: string;
}
const initialState: InitialState = {
  error: "",
  status: "idle",
  accessToken: "",
  refreshToken: "",
  user: undefined,
};

export const login = createAsyncThunk<{ admin: Admin; token: string }, Partial<Admin>, { state: RootState }>(
  "auth/login",
  async (admin) => {
    try {
      const response = await api.post("/auth/login", admin);
      return response.data.data;
    } catch (error: any) {
      throw error;
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.accessToken = action.payload.token;
        state.user = action.payload.admin;
        // Store user's tokens in local storage
        localStorage.setItem("Admin", action.payload?.admin?.userName);
        localStorage.setItem("accessToken", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Somethin went wrong";
        toast.error("Failed to submit message. Please try again.");
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
