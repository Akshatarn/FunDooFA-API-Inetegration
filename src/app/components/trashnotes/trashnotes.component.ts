import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent {

  notearray = [];
trashlist=[];
  constructor(private noteservice: NotesService) {

  }
  ngOnInit(): void {
    this.trashList()
  }
  trashList(){
    this.noteservice.getAllNote().subscribe((request:any)=>{
      console.log("request data",request);
      this.notearray=request.data
      console.log("request data", this.notearray)
    this.notearray=this.notearray.reverse();
      this.notearray=this.notearray.filter((notedata:any)=>{      
        return notedata.isTrash==true;
      })
    })
  }

}
