import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/UserModels";
import { fetchUsers } from "./usersApi";

interface UsersState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  filterBy: "name" | "username" | "email" | "phone";
  filteredUsers: User[];
}

const initialState: UsersState = {
  users: [],
  status: "idle",
  filterBy: "name",
  filteredUsers: [],
};

export const usersSlice = createSlice({
  name: "usersState",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filterBy = action.payload;
    },
    filterUsers(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.filteredUsers = state.users.filter((user) =>
        user[state.filterBy]?.toLowerCase().includes(searchTerm)
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setFilter, filterUsers } = usersSlice.actions;
export const usersReduser = usersSlice.reducer;
