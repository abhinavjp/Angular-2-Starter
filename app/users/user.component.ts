import { Component, OnInit } from '@angular/core';

import { User, Users } from '../shared/models/user';

@Component({
    templateUrl: './app/users/user.component.html',
    styleUrls: ['./app/users/user.component.css']
})
export class UserComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    message: string = "Please select a user!";
    users: Users = [
        { id: 1, name: 'Abhinav', username: 'abhinavjp' },
        { id: 2, name: 'Sujata', username: 'sujata67' },
        { id: 3, name: 'Jairaj', username: 'jairaj9kp' }];
    activeUser: User;

    selectUser(user: User) {
        this.activeUser = user;
    }

    onUserCreation(event) {
        this.users.push(event.user);
    }
}