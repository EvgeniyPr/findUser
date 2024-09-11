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
