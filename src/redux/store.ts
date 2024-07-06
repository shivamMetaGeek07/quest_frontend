import { configureStore } from '@reduxjs/toolkit';
  import { persistStore, persistReducer } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import communityReducer from './reducer/communitySlice';
import questReducer from './reducer/questSlice';
import adminCommunityReducer from './reducer/adminCommunitySlice';
import userReducer from './reducer/auth';

const rootReducer = combineReducers({
  community: communityReducer,
  quest: questReducer,
  adminCommunity: adminCommunityReducer,
  login: userReducer
});

const persistConfig = {
  key: 'root',
  storage,
  // Only persist the login state if you want
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;