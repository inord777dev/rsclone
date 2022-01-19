export type User = {
  name: string;
  password: string;
  email: string;
};

export type UserState = {
  user: User;
  isLoading: false;
  error: string;
};
