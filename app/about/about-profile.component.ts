import { UserService } from '../shared/services/user.service';
import { User, Users } from '../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: "./app/about/about-profile.component.html",
    styleUrls: ["./app/about/about-profile.component.css"]
})
export class AboutUserComponent implements OnInit {
    user: User;
    constructor(private route: ActivatedRoute, 
        private service: UserService,
        private router: Router) {

    }
    ngOnInit() {
        let username = this.route.snapshot.params["username"];
        this.user = this.route.snapshot.data['user'];
    }

    goBack(){
        this.router.navigate(['/about']);
    }
}