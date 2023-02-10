import {Component, Input,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notesservices/notes.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent {
  @Input() notelist: any;
  constructor(private noteservice: NotesService,private route:Router,public dialog: MatDialog){}
   
  updateNote(noteObject:any){
    console.log("update called");
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      data:noteObject
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  
  
}
