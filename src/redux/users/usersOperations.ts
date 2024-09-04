import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import type { User } from "../../types/User";

export const fetchUsers = createAsyncThunk<User[], undefined, { rejectValue: string }>(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get<User[]>("/users");

      const users = res.data.map(user => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
        };
      });

      return users;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);
