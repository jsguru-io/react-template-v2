import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/appstore';

// Define a type for the slice state
interface AuthState {
  user: string,
  name: string
  isLoading: boolean
}

// Define the initial state using that type
const initialState: AuthState = {
  user: '',
  name: '',
  isLoading: false
};

export const authSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const authUser = (state: RootState) => state.auth;

export default authSlice.reducer;
