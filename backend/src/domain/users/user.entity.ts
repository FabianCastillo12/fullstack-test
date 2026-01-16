export class User {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: Date;

  constructor(props: Partial<User>) {
    Object.assign(this, props);
  }
}
