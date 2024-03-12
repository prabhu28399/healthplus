import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HelplineComponent } from './helpline/helpline.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DrKarthikPingleComponent } from './dr-karthik-pingle/dr-karthik-pingle.component';
import { DrVictorVinodBabuComponent } from './dr-victor-vinod-babu/dr-victor-vinod-babu.component';
import { DrNaliniComponent } from './dr-nalini/dr-nalini.component';
import { DrColComponent } from './dr-col/dr-col.component';
import { DrPranathiComponent } from './dr-pranathi/dr-pranathi.component';
import { DrRahulComponent } from './dr-rahul/dr-rahul.component';
import { DrSrinivasComponent } from './dr-srinivas/dr-srinivas.component';
import { DrNaveenComponent } from './dr-naveen/dr-naveen.component';
import { DrJaswinderComponent } from './dr-jaswinder/dr-jaswinder.component';
import { DrPvijayComponent } from './dr-pvijay/dr-pvijay.component';
import { DrBhupathiComponent } from './dr-bhupathi/dr-bhupathi.component';
import { DrSasidharComponent } from './dr-sasidhar/dr-sasidhar.component';
import { DrRevanthComponent } from './dr-revanth/dr-revanth.component';
import { DrSrinivasaComponent } from './dr-srinivasa/dr-srinivasa.component';

export const routes: Routes = [
    { 'path': '', 'title': 'Home', component: HomeComponent },
    { 'path': 'about', 'title': 'About', component: AboutComponent },
    { 'path': 'doctor', 'title': 'Find Doctor', component: DoctorComponent },
    { 'path': 'contact', 'title': 'Contact', component: ContactComponent },
    { 'path': 'signup', 'title': 'Sign Up', component: SignupComponent },
    { 'path': 'login', 'title': 'LogIn', component: LoginComponent },
    { 'path': 'helpline', 'title': 'Helpline', component: HelplineComponent },
    { 'path': 'appointment', 'title': 'appointment', component: AppointmentComponent },
    { 'path': 'dr-karthik-pingle', 'title': 'dr-karthik-pingle', component: DrKarthikPingleComponent },
    { 'path': 'dr-victor-vinod-babu', 'title': 'dr-victor-vinod-babu', component: DrVictorVinodBabuComponent },
    { 'path': 'dr-nalini', 'title': 'dr-nalini', component: DrNaliniComponent },
    { 'path': 'dr-col', 'title': 'dr-col', component: DrColComponent },
    { 'path': 'dr-pranathi', 'title': 'dr-pranathi', component: DrPranathiComponent },
    { 'path': 'dr-rahul', 'title': 'dr-rahul', component: DrRahulComponent },
    { 'path': 'dr-srinivas', 'title': 'dr-srinivas', component: DrSrinivasComponent },
    { 'path': 'dr-naveen', 'title': 'dr-naveen', component: DrNaveenComponent },
    { 'path': 'dr-jaswinder', 'title': 'dr-jaswinder', component: DrJaswinderComponent },
    { 'path': 'dr-pvijay', 'title': 'dr-pvijay', component: DrPvijayComponent },
    { 'path': 'dr-bhupathi', 'title': 'dr-bhupathi', component: DrBhupathiComponent },
    { 'path': 'dr-sasidhar', 'title': 'dr-sasidhar', component: DrSasidharComponent },
    { 'path': 'dr-revanth', 'title': 'dr-revanth', component: DrRevanthComponent },
    { 'path': 'dr-srinivasa', 'title': 'dr-srinivasa', component: DrSrinivasaComponent },
    { path: 'admin', 'title': 'Admin', component: AdminPanelComponent },

];

import { NgModule } from '@angular/core';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
