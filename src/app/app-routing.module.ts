import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { ProfileComponent } from './comp/profile/profile.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent]
})
export class AppRoutingModule { }
