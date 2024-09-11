import { configureStore } from "@reduxjs/toolkit";
import { usersReduser } from "../users/userSlice";

export const store = configureStore({ reducer: { usersState: usersReduser } });
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
