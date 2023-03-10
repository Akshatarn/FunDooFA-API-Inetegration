import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive/archive.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetAllnotesComponent } from './components/get-allnotes/get-allnotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TrashnotesComponent } from './components/trashnotes/trashnotes.component';

const routes: Routes = [
   {path:'', component:LoginComponent},
  { path: 'signup', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'reset', component: ForgetpasswordComponent },
  {
    path: 'home', component: DashboardComponent,
    children: [
      //{path:'displaynotes',component: DisplaynoteComponent},
      { path: 'getallnotes', component: GetAllnotesComponent },
      {path:'archivenotes',component:ArchiveComponent},
    { path: 'trash', component: TrashnotesComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }