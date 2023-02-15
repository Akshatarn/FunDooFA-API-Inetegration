import { Component, Input, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  isDelete = false;
  isDeleted: any;
  notelist: any = [];
  noteId: any;
  constructor(private noteservice: NotesService) {

  }
  ngOnInit(): void {
    // this.isDelete = this.noteCard.isDeleted;
  }
  trash(){
    let data ={
      noteId:[this.noteCard.noteID]
    }
    console.log(data)
    this.noteservice.deletenote(data).subscribe((response:any)=>{
      console.log(response);
    })
  }

}


 

