import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyReposComponent } from './my-repos/my-repos.component';

const routes: Routes = [

  {path: '', component:ProfileComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'my-repos', component:MyReposComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }
