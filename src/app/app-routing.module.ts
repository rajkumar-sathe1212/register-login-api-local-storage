import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  {path:"",component:LoginComponent,pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"home",component:HomeComponent},
  {path:"**",component:WildCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
