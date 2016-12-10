import { UserResolver, UsersResolver } from './about.resolver';
import { AboutSectionComponent } from './about-section.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { aboutRouting } from './about.routing';
import { UserService } from '../shared/services/user.service';

import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-profile.component';

@NgModule({
    imports: [
        CommonModule,
        aboutRouting
    ],
    exports: [],
    declarations: [
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent
    ],
    providers: [
        UserService,
        UsersResolver,
        UserResolver
    ],
})
export class AboutModule { }
