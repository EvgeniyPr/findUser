import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReduser } from "../users/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  usersState: usersReduser,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["usersState"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
