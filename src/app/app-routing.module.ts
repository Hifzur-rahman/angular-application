import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ViewComponent } from './view/view.component';
import { ViewupdateComponent } from './viewupdate/viewupdate.component';


const routes: Routes = [
  {path:'', component: LoginpageComponent},
  {path:'view', component: ViewComponent},
  {path:'viewupdate', component: ViewupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
