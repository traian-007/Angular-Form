import { Injectable } from '@angular/core';
import { User } from '../../models/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
