import { FormValidatorComponent } from './form-validator/form-validator.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserComponent } from './users/user.component';
import { appRouting } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        appRouting
    ],
    declarations: [
        FormValidatorComponent,
        AppComponent,
        HomeComponent,
        ContactComponent,
        UserComponent,        
        UserFormComponent,
        UserProfileComponent
    ],
    providers: [
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}