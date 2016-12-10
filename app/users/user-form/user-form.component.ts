import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../shared/models/user';

@Component({
    selector: 'user-form',
    templateUrl: './app/users/user-form/user-form.component.html',
    styleUrls: ['./app/users/user-form/user-form.component.css']
})
export class UserFormComponent implements OnInit {
    @Output() userCreated = new EventEmitter();
    newUser: User = new User();
    active: boolean = true;
    public userForm: FormGroup;
    public submitted: boolean = false;
    public events = [];

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: ['', Validators.required],
            username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]]
        });
    }

    onSubmit(model: User, isValid: boolean, userForm) {
        this.submitted = true;
        console.log(userForm);
        //Check If model is valid


        if (isValid) {
            this.userCreated.emit({ user: this.newUser });
            this.newUser = new User();
            this.submitted = false;
            this.userForm.reset();
        }
    }
}