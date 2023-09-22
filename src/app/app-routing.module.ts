import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddedituserComponent } from './users/addedituser/addedituser.component';
const routes: Routes = [
  // { path: '**', component: DashboardComponent },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "users/add",
    component: AddedituserComponent
  },
  {
    path: "users/:id",
    component: AddedituserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
