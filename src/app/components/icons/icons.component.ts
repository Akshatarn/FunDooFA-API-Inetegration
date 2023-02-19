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
   unArchive(){
    let data={
      noteId:[this.noteCard.noteID],
     isArchive:false,
    }
    console.log(data)
    this.noteservice.archievenote(data).subscribe((response:any)=>{
      console.log(response)
      this.displaytoIcons.emit(response);
    
   })
  }
   restoreNote(){
    let data ={
      noteId:[this.noteCard.noteID],
      trash:false,
    }
    console.log(data);
    this.noteservice.getalltrashnotes(data).subscribe((response:any)=>
    {
      console.log(response);
      this.displaytoIcons.emit(response);
      
    })
    
   }
   deleteNote(){
    let data ={
      noteId:[this.noteCard.noteID]
    }
    console.log(data);
    this.noteservice.deletenote(data).subscribe((response:any)=>{
      console.log(response);
      this.displaytoIcons.emit(response);
      
    })
    
   }

   colors : Array<any> = [
    {code : '#fff',name:"white"},
    {code : '#f28b82',name:"red"},
    {code : '#fbbc04',name:"Orange"},
    {code : '#ffff00',name:"yellow"},
    {code : '#ccff90',name:"green"},
    {code : '#a7ffeb',name:"teal"},
    {code : '#cbf0f8',name:"blue"},
    {code : '#aecbfa',name:"darkblue"},
    {code : '#d7aefb',name:"lavender"},
    {code : '#e6c9a8',name:"peach"},

   ]
   setColor(color:any){
    console.log('color',color.name);
    console.log(this.noteCard);
    this.noteCard.color = color;
    let data ={
      color :color.name,
      noteId:this.noteCard.noteID

    }
    console.log(data);
    this.noteservice.changeColor(data).subscribe((response:any)=>{
      console.log(response);
      
    })
  
   }

  

}


 

