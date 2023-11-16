

// earnedAmountSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EarnedAmountState {
  value: number;
  totalSeconds: number;
}

const initialState: EarnedAmountState = {
  value: 0,
  totalSeconds:0
};


const earnedAmountSlice = createSlice({
  name: 'earnedAmount',
  initialState,
  reducers: {
    setEarnedAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      console.log('New ' ,state.value);
    },
   updateTotalSecond: (state, action: PayloadAction<number>) => {
    state.totalSeconds = action.payload;
     console.log('New total seconds:', state.totalSeconds);
   }
    // decreaseEarnedAmount: (state, action: PayloadAction<number>) => {
    //   console.log('Reducer - Decreasing amount:', action.payload);
    //   state.value = state.value - action.payload;
    //   console.log('from decrease', state.value);
    // },
  },
});


export const { setEarnedAmount,updateTotalSecond} = earnedAmountSlice.actions;
export default earnedAmountSlice.reducer;


