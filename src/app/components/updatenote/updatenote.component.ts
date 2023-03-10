import {Component, Inject,Input,Output,EventEmitter} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notesservices/notes.service';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {
  @Input() title:any;
  description:any;
  noteID:any;
  notelist: any;


  constructor(private noteservice: NotesService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    if(data){
      this.title=data.title,
      this.description=data.description,
      this.noteID=data.noteID
    }
    
  }
 updateAuto(){
  this.dialogRef.close();
 }
  onNoClick(): void {
    console.log("updated title",this.title);
    let payload = {
      title:this.title,
      description:this.description,
      noteID:this.noteID
    } 
    console.log(payload);
    this.noteservice.updatenotes(payload).subscribe((response:any) =>{
      console.log(response);
      this.dialogRef.close(response);
      
    })
    //this.dialogRef.close();
    

  }
}
