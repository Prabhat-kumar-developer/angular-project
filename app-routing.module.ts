import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHomeComponent } from './login-home/login-home.component';


const routes: Routes = [
  {path:'login-home' , component:LoginHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
