// store.ts
import { configureStore } from '@reduxjs/toolkit';
import earnedAmountReducer from './earnedAmountSlice';

const store = configureStore({
  reducer: {
    earnedAmount: earnedAmountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
