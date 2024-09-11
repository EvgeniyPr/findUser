import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserFromDb } from "../models/UserModels";
import { usersDomain } from "./usersDomain";

export const fetchUsers = createAsyncThunk(
  "users/update",
  async (
    url: string,
    { rejectWithValue }
  ): Promise<User[] | ReturnType<typeof rejectWithValue>> => {
    try {
      const responce = await fetch(url);
      const usersFromDb: UserFromDb[] = await responce.json();
      return usersDomain.mapedUsers(usersFromDb);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);
