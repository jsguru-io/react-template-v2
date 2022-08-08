import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/viewmodel/counterSlice';
import { authSlice } from '../features/auth/viewmodel/authSlice';
// ...

const reducer = combineReducers({
  counter: counterSlice.reducer,
  auth:authSlice.reducer
});
export const store = configureStore({
  reducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
