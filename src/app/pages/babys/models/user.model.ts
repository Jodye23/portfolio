export interface IUser {
  name: string;
  surname: string;
  password: string;
  dateOfBirth: Date;
  id: number;
}

export class User implements IUser {
  name: string = '';
  surname: string = '';
  password: string = '';
  dateOfBirth: Date;
  id: number = new Date().getTime();

  constructor(u) {
    if (u) {
      Object.assign(this, u);
    }
  }

}