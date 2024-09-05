import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "./usersOperations";
import type { User } from "../../types/User";

export interface Filters {
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UserSlice {
  users: User[];
  filters: Filters;
  isLoading: boolean;
}

const initialState: UserSlice = {
  users: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<{ field: keyof Filters; value: string }>) => {
      state.filters[action.payload.field] = action.payload.value;
    },
  },
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
    selectFilters: (state: UserSlice) => state.filters,
  },
});

export const usersReducer = userSlice.reducer;
export const { updateFilters } = userSlice.actions;
export const { selectUsers, selectIsLoading, selectFilters } = userSlice.selectors;
