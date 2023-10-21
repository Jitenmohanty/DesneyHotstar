import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./Reducers/userSlice";
import movieSlice from "./Reducers/movieSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    movie:movieSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
