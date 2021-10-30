import { PrivateModeService } from 'src/app/services/privateModeService/private-mode.service';
import { PremissionsService } from './../../services/premissionsSevice/premissions.service';
import { CategoriesService } from './../../services/categoriesService/categories.service';
import { ImageService } from './../../services/imageService/image.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, NgForm, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-uplodings',
  templateUrl: './uplodings.component.html',
  styleUrls: ['./uplodings.component.css']
})
export class UplodingsComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  public fileSrc = '';
  premissionsSettings: any
  categories: any
  lat: any;
  lng: any;
  privateMode:any
  fileSrcEventHander($event: any) {
    this.fileSrc = $event;
  }
  form: FormGroup;

  constructor(private privateModeService:PrivateModeService,private fb: FormBuilder, private CategoriesService: CategoriesService, private imageService: ImageService, private premissionsService: PremissionsService, public dialog: MatDialog) {
   this.privateModeService.getPrivateStat().subscribe((data:any)=>{
     if(data.secretMode=="true")
     this.privateMode=data.secretMode;
   })
   
    this.premissionsService.getPremissions().subscribe((data: any) => {
      this.premissionsSettings = data;
    });
    

    this.CategoriesService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });


    this.form = this.fb.group({
      src: new FormControl(),
      name: new FormControl(),
      caption: new FormControl(),
      location: [this.lat, this.lng],
      favorite: false,
      privateMode: false,
      categories: this.fb.array([])
    })
  }
  ngOnInit(): void {
  }
  setLocation(data: any) {
    this.lat = data[0]
    this.lng = data[1]

  }
  onCheckboxChange(e: any) {
    const categories: FormArray = this.form.get('categories') as FormArray;

    if (e.target.checked) {
      categories.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      categories.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          categories.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    this.form.patchValue({ location: [this.lat, this.lng] })
    if (this.form.status === 'INVALID') {
      alert("you have to fill all fields")
    } else {
      this.dialog.closeAll(); // Close opened diaglo
      // do whatever you want to do with your data
      this.imageService.setImageJson(this.form)
      this.imageService.onSubmit();
    }
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
}
export class DialogDataExampleDialog { }