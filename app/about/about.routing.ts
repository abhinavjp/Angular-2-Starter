import { UserResolver, UsersResolver } from './about.resolver';
import { UserService } from '../shared/services/user.service';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-profile.component';
import { AboutSectionComponent } from './about-section.component';

const aboutRoutes: Routes = [
    {
        path: '',
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent,
                resolve: {
                    users : UsersResolver
                }
            },
            {
                path: ':username',
                component: AboutUserComponent,
                resolve: {
                    user : UserResolver
                }
            }
        ]
    }
];


export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);