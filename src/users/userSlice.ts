import { createSlice } from "@reduxjs/toolkit";
import { User, UserStateFilterBy, UserStateStatus } from "./models/UserModels";
import { fetchUsers } from "./usersApi";

interface UsersState {
  users: User[];
  status: UserStateStatus;
  filterBy: UserStateFilterBy;
  filterValue: string;
  filteredUsers: User[];
}

const initialState: UsersState = {
  users: [],
  status: UserStateStatus.idle,
  filterBy: UserStateFilterBy.name,
  filterValue: "",
  filteredUsers: [],
};

export const usersSlice = createSlice({
  name: "usersState",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filterBy = action.payload;
    },
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },

    resetFilterValue(state) {
      state.filterValue = "";
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
        state.status = UserStateStatus.loading;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = UserStateStatus.succeeded;
        state.users = action.payload;
        state.filteredUsers = action.payload;
        sessionStorage.setItem("usersData", JSON.stringify(action.payload));
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = UserStateStatus.failed;
      });
  },
});

export const { setFilter, filterUsers, setFilterValue, resetFilterValue } =
  usersSlice.actions;
export const usersReduser = usersSlice.reducer;
