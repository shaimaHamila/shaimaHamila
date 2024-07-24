import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "../features/message/messageSlice";
import authSlice from "../features/auth/authSlice";
// ...

export const store = configureStore({
  reducer: {
    auth: authSlice,
    message: messageSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
