import { Users } from '../models/user';
import { Injectable } from '@angular/core';

const usersPromise: Promise<Users> = Promise.resolve([{
    id: 1,
    name: "Abhinav",
    username: "abhinav_jp",
    avatar: "https://pbs.twimg.com/profile_images/559711449962905600/Rk8sGQcq_400x400.jpeg"
},
{
    id: 2,
    name: "Jairaj",
    username: "jairaj9kp",
    avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png"
},
{
    id: 3,
    name: "Sujata",
    username: "Sujata_JKP",
    avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_2_400x400.png"
}]);

@Injectable()
export class UserService {

    constructor() { }

    getAllUsers() {
        return usersPromise;
    }

    getUserById(id: number) {
        return usersPromise.then(users => {
            return users.find((user) => user.id === id);
        });
    }

    getUserByUsername(username: string) {
        return usersPromise.then(users => {
            return users.find((user) => user.username === username);
        });
    }
} 