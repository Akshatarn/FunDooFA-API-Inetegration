import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  @Output() displaytogetallnotes=new EventEmitter<string>();
  
  token:any;
  notesArray:any;
  noteData:any;
  message:any;
  public subscription:any;

  constructor(private noteservice:NotesService) { 
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
    this.noteservice.getAllNote().subscribe((request:any)=> {
      console.log("request data", request);
      this.notesArray = request.data;
      console.log(this.notesArray);
      this.notesArray = this.notesArray.filter((notedata:any)=>{
        return notedata.archive ===true;
      })
    })
  }

  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getAllNotes()
  }

}
