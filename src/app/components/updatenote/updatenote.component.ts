import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notesservices/notes.service';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {
  title:any
  // description:any
  constructor(private noteservice: NotesService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    if(data){
      this.title=data.title
    }
    
  }

  onNoClick(): void {
    console.log("updated title",this.title);
    // this.noteservice.updatenote().subscribe((request:any)=>{

    // })
    this.dialogRef.close();
  }
}
