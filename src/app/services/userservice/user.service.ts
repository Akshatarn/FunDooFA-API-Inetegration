import { HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  token:any

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token');
   }

  login(data : any)
  {
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpservice.Post('User/Login', data, false, headerOptions)
  }
  registration(data : any)
  {
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpservice.Post('User/Register', data, false, headerOptions)
  }
  resetpassword(data : any)
  {
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpservice.Put('User/ResetPassword?new_password=' + data.password + '&confirm_password=' + data.confirmPassword, data, true, headerOptions)
  }
  reset(data : any)
  {
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpservice.Post('User/ForgotPassword?email=' + data.email, {}, false, headerOptions)
  }
}

