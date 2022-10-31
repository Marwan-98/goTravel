import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { add, addDays, format, startOfToday } from "date-fns";
import { User } from "../../types/User";

type initialState = {
  user: User | null;
  startDate: string;
  endDate: string;
};

const initialState: initialState = {
  user: null,
  startDate: format(startOfToday(), "yyyy-MM-dd"),
  endDate: format(add(startOfToday(), { days: 1 }), "yyyy-MM-dd"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
  },
});

export const { setUser, setStartDate, setEndDate } = userSlice.actions;
export const userReducer = userSlice.reducer;
