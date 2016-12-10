import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User, Users } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

// Resolve for About
@Injectable()
export class UsersResolver implements Resolve<Users> {
  constructor(private userService: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getAllUsers();
  }
}

// Resolve for About Profile
@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getUserByUsername(route.params['username']);
  }
}