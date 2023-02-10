import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})
export class GetAllnotesComponent implements OnInit {
  notearray: any = [];
  @Input() Notelist: any;
  constructor(private noteservice: NotesService) {

  }
  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    return this.noteservice.getAllNote().subscribe((response: any) => {
      console.log("get all note", response)
      this.Notelist = response.data;
      // console.log(this.Notelist);
    })
  }
  
 
}
