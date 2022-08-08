import React from 'react';
import { getAllEmployee, increment } from '../viewmodel/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/storehooks';
import { Employee } from '../model/employee';

const Counter: React.FC = () => {
  const count: number = useAppSelector((state) => state.counter.value);
  const employees: Employee[] = useAppSelector((state) => state.counter.employees);

  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <br />
      <h2>Value: {count}</h2>
      <h2>Employee L: {employees?.length}</h2>
      <button onClick={() => {
        return dispatch(increment());
      }}>Increase
      </button>
      <button onClick={() => {
          dispatch(getAllEmployee());
      }}>API call
      </button>
    </div>
  );
};

export default Counter;
