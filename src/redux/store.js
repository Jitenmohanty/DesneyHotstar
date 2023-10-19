import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./Reducers/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
