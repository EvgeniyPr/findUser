export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserFromDb extends User {
  [key: string]: object | string;
}

export enum UserStateStatus {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
}

export enum UserStateFilterBy {
  name = "name",
  username = "username",
  email = "email",
  phone = "phone",
}
