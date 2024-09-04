import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "./usersOperations";
import type { User } from "../../types/User";

interface UserSlice {
  users: User[];
  isLoading: boolean;
}

const initialState: UserSlice = {
  users: [],
  isLoading: false,
};

const userSLice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectUsers: (state: UserSlice) => state.users,
    selectIsLoading: (state: UserSlice) => state.isLoading,
  },
});

export const usersReducer = userSLice.reducer;
export const { selectUsers } = userSLice.selectors;
