import { HttpHeaders } from '@angular/common/http';
// import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any

  constructor(private httpservice: HttpService) {
  }
  createnote(data: any) {
    console.log(data);    
    this.token = localStorage.getItem('token')
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization':" Bearer "+ this.token
      })
    }
    console.log(this.token);
    return this.httpservice.Post('Notes/CreateNote', data, true, headerOptions)
  }
  getAllNote() {
    this.token = localStorage.getItem('token')
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':" Bearer "+ this.token
      })
    }
   
    return this.httpservice.Get('Notes/RetrieveAllNote', true, headerOptions)
  
  }
  deletenote(data : any){
    this.token = localStorage.getItem('token')
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':" Bearer "+ this.token
      })
    }
    return this.httpservice.delete(`Notes/DeleteNote?noteId=${data.noteId}`, data, true, headerOptions);
  }
  updatenote(data:any){
    this.token =localStorage.getItem('token')
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':" Bearer "+ this.token
      })
    }
    return this.httpservice.Put(`Notes/UpdateNote?noteId=${data.noteId}`,data,true,headerOptions)
  }
  }


