import { Component, Input, OnInit, Output,EventEmitter,ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';
import { ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../archive/archive/archive.component';
import { TrashnotesComponent } from '../trashnotes/trashnotes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  @Output() displaytoIcons = new EventEmitter<string>();
  isDelete = false;
  archive=false;
  notelist: any = [];
  noteId: any;
  data:any;
  constructor(private noteservice: NotesService,private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    let compnt=this.route.snapshot.component;
    if(compnt==TrashnotesComponent){
      this.isDelete = true;
    }
    if(compnt==ArchiveComponent)
    {
      this.archive = true;
    }
  }
  trash(){
    let data ={
      noteId:[this.noteCard.noteID]
    }
    console.log(data)
    this.noteservice.getalltrashnotes(data).subscribe((response:any)=>{
      console.log(response);
      this.displaytoIcons.emit(response);
    })
  }
  archiveNote(){
    let req={
      noteId:[this.noteCard.noteID],
     isArchive:true,
    }
    console.log(req)
    this.noteservice.archievenote(req).subscribe((response:any)=>{
      console.log(response)
      this.displaytoIcons.emit(response);
    
    })
   } 

  

}


 

