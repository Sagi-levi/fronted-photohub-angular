import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogImageComponent } from '../../../dialog-image/dialog-image.component';
@Component({
  selector: 'app-single-siplay',
  templateUrl: './single-siplay.component.html',
  styleUrls: ['./single-siplay.component.css']
})
export class SingleSiplayComponent implements OnInit {
  @Input() image: any;
  display="true"
  constructor(public dialog: MatDialog) {
  }
  
  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogImageComponent,{data:{image: this.image}})
  }
}

