import { type PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../../store/store";
import { Message } from "../../types/Message";
import api from "../../api/AxiosConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface InitialState {
  status: "idle" | "loading" | "failed";
  messages: Message[];
  error: string;
}
const initialState: InitialState = {
  status: "idle",
  messages: [],
  error: "",
};

export const fetchMessages = createAsyncThunk<Message[], void, { state: RootState }>(
  "message/fetchMessages",
  async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const response = await api.get("/message", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error: any) {
      toast.error("Failed to feach message. Please try again.");
      throw new Error(error.response.data.message);
    }
  },
);

export const addMessage = createAsyncThunk<Message, Partial<Message>, { state: RootState }>(
  "message/addMessage",
  async (newMessage) => {
    try {
      const response = await api.post("/message", newMessage).then((res) => res.data);
      return response.data;
    } catch (error: any) {
      toast.error("Failed to submit message. Please try again.");
      throw new Error(error.response.data.message);
    }
  },
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action: PayloadAction<Message[]>) => {
        state.status = "idle";
        state.messages = action.payload;
        state.error = "";
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = "failed";
        state.messages = [];
        state.error = action.error.message ?? "Somethin went wrong";
      })
      .addCase(addMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMessage.fulfilled, (state, action: PayloadAction<Message>) => {
        state.status = "idle";
        const index = state.messages.findIndex((message) => message._id === action.payload._id);
        if (index == -1) {
          state.messages.unshift(action.payload);
          toast.success("Message submitted successfully!");
        }
      })
      .addCase(addMessage.rejected, (state) => {
        state.status = "failed";
        state.error = "Somethin went wrong";
      });
  },
});

export const selectMessages = (state: RootState) => state.message.messages;
export const selectStatus = (state: RootState) => state.message.status;

export default messageSlice.reducer;
