import {Component, Input,EventEmitter,Output, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material/dialog';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notesservices/notes.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit{
  @Input() 
  notelist: any;
  msg: any;
  Search='';
  subscription :any;
  @Output() displaytogetallnotes=new EventEmitter<string>();
  constructor(private noteservice: NotesService,private route:Router,public dialog: MatDialog,private dataService:DataService){}
   
  ngOnInit(): void {
    this.dataService.recievedData.subscribe((res:any)=>{
      console.log(res);
      this.Search=res;      
    })
  }
   
  updateNote(noteObject:any){
    console.log("update called");
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      data:noteObject
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.displaytogetallnotes.emit(result)
    });
  }
  receiveMsgIconsToDisplay($event: any) {
    console.log("recievedindisplay", $event);
    this.msg = $event
    this.displaytogetallnotes.emit(this.msg)
  }
  
  
}
