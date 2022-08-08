import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../store/appstore';
import { getEmployee } from '../service/CounterService';
import axios from 'axios';
import { Employee } from '../model/employee';
import { ErrorAPIModel } from '../../../utils/service/ErrorAPIModel';

// Define a type for the slice state
interface CounterState {
  value: number;
  isLoading: boolean;
  employees: Employee[];
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  isLoading: false,
  employees: []
};

export const getAllEmployee = createAsyncThunk(
  '/employee', async (obj, { rejectWithValue,}) => {
    try {
      const response: Employee[] = await getEmployee();
      return response;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        throw rejectWithValue(error.response.data as ErrorAPIModel);
      }
    }
  }
);


export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employees = action.payload ?? [];
      })
      .addCase(getAllEmployee.rejected, (state, action) => {
        state.isLoading = false;
        console.log('REJECT: ', action.payload);
        //set error in state
      });
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
