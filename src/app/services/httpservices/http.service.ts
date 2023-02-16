import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResetPassword } from '../typeInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = "https://localhost:44314/api/"
  constructor(private http: HttpClient) { }

  Post(url: string, data: any, token: boolean = true, headersoption: any) {
    return this.http.post(this.baseurl + url, data, token && headersoption)
  }
Get(url: string, token: boolean = false, headersoption: any){
  return this.http.get(this.baseurl + url, token && headersoption)
}
delete(url: string,data:any, token: boolean = false, headersoption: any){
  return this.http.delete(this.baseurl + url, token && headersoption)
}
Put(url:string,requestData:any,token:boolean=false,headerOptions:any) {
  return this.http.put(this.baseurl+url, requestData, token && headerOptions)
}
}
