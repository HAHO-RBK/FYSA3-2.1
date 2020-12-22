import { Role } from './role';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: String;
  token?: string;
}
