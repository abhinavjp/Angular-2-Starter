import { UserComponent } from './users/user.component';
import { ModuleWithProviders } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AboutUserComponent } from './about/about-profile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path:'', component: HomeComponent},
    { 
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
     },{ 
        path: 'user',
        component: UserComponent
     },
    { path:'contact', component: ContactComponent},
    { path:'**', component: HomeComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes)