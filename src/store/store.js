import { configureStore } from "@reduxjs/toolkit";
import { emailSupportApi } from "../services/emailSupportApi";

const store = configureStore({
  reducer: {
    [emailSupportApi.reducerPath]: emailSupportApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emailSupportApi.middleware),
});

export default store;
