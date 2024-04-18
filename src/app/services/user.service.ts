import { Injectable } from "@angular/core";
import { User } from "../model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  addUser(user: User) {
    console.log('User added:', user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User | null {
    const userString = localStorage.getItem('user');
    if (!userString) {
      return null;
    }
    return JSON.parse(userString);
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
