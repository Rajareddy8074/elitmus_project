import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { WinningPageComponent } from './winning-page/winning-page.component';

const routes: Routes = [
  {
    component:LoginPageComponent,
    path:'loginPage',
  },
  {
  component:FirstPageComponent,
  path:'firstPage',
  canActivate:[AuthGuard]
  },
  {
   component:SecondPageComponent,
   path:'secondPage',
   canActivate:[AuthGuard]
  },
  {
    component:WinningPageComponent,
    path:'winningPage',
    canActivate:[AuthGuard]
   }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
