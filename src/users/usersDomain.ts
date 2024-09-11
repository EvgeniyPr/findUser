import { UserFromDb } from "../models/UserModels";

export const usersDomain = {
  mapedUsers(users: UserFromDb[]) {
    return users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
      };
    });
  },
};
