// redux/store.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
  earnedAmount: number;
}

const earnedAmountSlice = createSlice({
  name: "earnedAmount",
  initialState: 0,
  reducers: {
    setEarnedAmount: (state, action: PayloadAction<number>) => action.payload,
    addToEarnedAmount: (state, action: PayloadAction<number>) => state + action.payload,
    subtractFromEarnedAmount: (state, action: PayloadAction<number>) => state - action.payload,
  },
});

export const { setEarnedAmount, addToEarnedAmount, subtractFromEarnedAmount } = earnedAmountSlice.actions;

export const selectEarnedAmount = (state: RootState) => state.earnedAmount;

export const store = configureStore({
  reducer: {
    earnedAmount: earnedAmountSlice.reducer,
  },
});
