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
  updatenotes(data:any){
    this.token =localStorage.getItem('token')
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':" Bearer "+ this.token
      })
    }
    return this.httpservice.Put("Notes/UpdateNote?noteId="+data.noteID,data,true,headerOptions)
  }
  archievenote(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.Put(`Notes/ArchieveOrUnArchieve?noteId=${data.noteId}`, data, true, header);
  }
  getalltrashnotes(data:any){
    this.token = localStorage.getItem('token')
    let header ={
      headers : new HttpHeaders({
        'Content-type': 'appplication/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpservice.Put(`Notes/Trashed?noteId=${data.noteId}`, data, true, header);
  }
  changeColor(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data.color);
    
    return this.httpservice.Put(`Notes/ChangeColor?noteId=${data.noteId}&color=${data.color}`,{}, true, header);
  }
  }


