import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { LaunchDarklyService } from '../launchdarkly/launchdarkly.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly ld: LaunchDarklyService
  ) {}
  user() {
    return this.userService.getUser();
  }

  isAuthenticated() {
    return !!this.userService.getUser();
  }

  login(username: string) {
    this.userService.addUser({ username });
    const userContext = {
      key: `user-${username}`,
    };
    this.ld.identify(userContext).then(() => console.log('Identified user'));
  }

  logout() {
    this.userService.removeUser();
  }
}
