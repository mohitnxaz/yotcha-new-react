import { combineReducers } from "redux";
import { authSlice } from "./slices/auth/authSlice.reducers";
import { filterSlice } from "./slices/filter/filter.reducers";
import { addProperty } from "./slices/addProperty/addProperty.reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { agentFilterSlice } from "./slices/agentFilter/agentFilter.reducers";

const persistConfig = {
  key: "root", // key for the localStorage object
  storage, // specify the storage to use (localStorage in this case)
  whitelist: ["auth"], // specify which slices of state to persist
};

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
  [agentFilterSlice.name]: agentFilterSlice.reducer,
  [addProperty.name]: addProperty.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);
