import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User, Users } from '../shared/models/user';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: "about-page",
    templateUrl: "./app/about/about.component.html",
    styleUrls: ["./app/about/about.component.css"]
})
export class AboutComponent implements OnInit  {
    users: Users;

    constructor(private service: UserService, private route: ActivatedRoute){

    }

    ngOnInit() {
        this.users = this.route.snapshot.data['users'];
    }
}