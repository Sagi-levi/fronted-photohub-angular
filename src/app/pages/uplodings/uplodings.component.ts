import { PremissionsService } from './../../services/premissionsSevice/premissions.service';
import { CategoriesService } from './../../services/categoriesService/categories.service';
import { ImageService } from './../../services/imageService/image.service';
import { PictureJson } from './../../models';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-uplodings',
  templateUrl: './uplodings.component.html',
  styleUrls: ['./uplodings.component.css']
})
export class UplodingsComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  public fileSrc = '';
  premissionsSettings:any
  fileSrcEventHander($event: any) {
    this.fileSrc = $event;
  }
  constructor(private imageService: ImageService,private premissionsService:PremissionsService,public dialog: MatDialog) {
    this.premissionsSettings= this.premissionsService.getPremissions().subscribe((data: any)=>{
      this.premissionsSettings=data;
    });
   }
   openDialog() {
    let dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
}


onSend(form: NgForm){  
  if(form.status === 'INVALID'||this.imageService.imageJson==null)
  {
    alert("you have to fill all fields")
    // display error in your form
  }else{
    console.log(form.value)
    this.imageService.imageJson=form;
      this.dialog.closeAll(); // Close opened diaglo
    // do whatever you want to do with your data
    this.imageService.onSubmit();
  }
}
  ngOnInit(): void {
  }
}
export class DialogDataExampleDialog {}