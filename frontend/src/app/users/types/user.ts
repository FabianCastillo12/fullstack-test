export interface User {
  name: string;
  email: string;
  age: number;
}

export interface UserFormErrors {
  name?: string;
  email?: string;
  age?: string;
}
