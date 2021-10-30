import { PrivateModeService } from 'src/app/services/privateModeService/private-mode.service';
import { Router } from '@angular/router';
import { CategoriesService } from './../services/categoriesService/categories.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageService } from '../services/imageService/image.service';
import { PremissionsService } from '../services/premissionsSevice/premissions.service';

@Component({
  selector: 'app-dialog-image',
  templateUrl: './dialog-image.component.html',
  styleUrls: ['./dialog-image.component.css']
})
export class DialogImageComponent implements OnInit {
  form: FormGroup;
  lng: any;
  lat: any;
  categories: any;
  privateMode: any;
  premissionsSettings: any;

  constructor(private privateModeService:PrivateModeService ,private router:Router, @Inject(MAT_DIALOG_DATA) public data:any,private fb: FormBuilder, private CategoriesService: CategoriesService, private imageService: ImageService, private premissionsService: PremissionsService,) {
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
      src: data.image.src,
      name: `${data.image.src}`,
      caption: new FormControl(),
      location: [this.lat, this.lng],
      favorite: false,
      privateMode: false,
      categories: this.fb.array([])
    })
   }
   setLocation(data: any) {
    this.lat = data[0]
    this.lng = data[1]
  }
  refreshPage() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
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
      this.imageService.setEdit(this.form)
      this.imageService.edit();
    }
    this.refreshPage()
  }
  ngOnInit(): void {
  }

}
