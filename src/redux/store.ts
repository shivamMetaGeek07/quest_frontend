import { configureStore } from '@reduxjs/toolkit';
import communityReducer from './reducer/communitySlice';
import questReducer from './reducer/questSlice';
import userReducer from './reducer/auth'
export const store = configureStore({
  reducer: {
        community: communityReducer,
       quests: questReducer,
       login:userReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch