import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [
        UserFormComponent,
        UserProfileComponent,
        UserComponent  
    ],
    providers: [],
})
export class UserModule { }
