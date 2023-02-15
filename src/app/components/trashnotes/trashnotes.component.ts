import { Component,EventEmitter, Output,Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent {

notearray = [];
notedata:any;
  constructor(private noteservice: NotesService) {

  }
  @Output()
   displaytogetallnotes=new EventEmitter<string>();
  ngOnInit(): void {
    this.getAllNotes()
  }
  getAllNotes(){
    this.noteservice.getAllNote().subscribe((request:any)=>{
      console.log("request data",request);
      this.notearray=request.data
      console.log("request data", this.notearray)
    this.notearray=this.notearray.reverse();
      this.notearray=this.notearray.filter((notedata:any)=>{  
        // if(this.notedata.trash===true && this.notedata.archive===false){
        //   return this.notedata.trash;
        // }    
      return notedata.trash===true;
      })
    })
  }
  receiveMessagefromdisplaycard($event:any){
    console.log("withingetallnotes",$event);
    this.getAllNotes()
    
  }

}
