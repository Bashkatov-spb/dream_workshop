export type User = {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
};

export type AuthState = {
  user: undefined | User;
  error: undefined | string;
};

export type UserWithId = User & { id: number };

export type UserId = UserWithId['id'];

export type AuthResponse = {
  user: UserWithId;
  message: string;
};
