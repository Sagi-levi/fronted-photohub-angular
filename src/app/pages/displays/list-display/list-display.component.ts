import { PrivateModeService } from './../../../services/privateModeService/private-mode.service';
import { ImageService } from './../../../services/imageService/image.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {
  images: any[];
  isFavIsPriv: FormGroup
  isFav: any
  privateMode: any;
  captionSearch: any;
  constructor(fb: FormBuilder, private imageService: ImageService, private privateModeService: PrivateModeService) {
    this.privateModeService.getPrivateStat().subscribe((data:any)=>{
      if(data.secretMode=="true")
      this.privateMode=data.secretMode;
    })
    this.images = [];
    
    this.isFavIsPriv = fb.group({
      isFav: new FormControl(false),
      isPrivate: new FormControl(false),
    })
    
    let afterParse= {isFav:`${this.isFavIsPriv.value.isFav}`,isPrivate:`${this.isFavIsPriv.value.isPrivate}`}
    this.imageService.getAllImagesJsons(afterParse).subscribe((data: any) => {


      for (let i = 0; i < data.length; i++) {

        if(data[i]){ //dismiss the emty ones
          if(data[i].src===undefined){//dismiss the emty ones
            continue
          }
          data[i].location= data[i].location.split(",")
          this.images.push(data[i]);

        } 
      }
    });
  }
  searchByCaption(){
    this.images=this.images.filter((x:any)=>x.caption.includes(this.captionSearch))
  }
  setDisplaySettings(){
    let afterParse= {isFav:`${this.isFavIsPriv.value.isFav}`,isPrivate:`${this.isFavIsPriv.value.isPrivate}`}

    
     this.images=[];
     this.imageService.getAllImagesJsons(afterParse).subscribe((data: any) => {
       for (let i = 0; i < data.length; i++) {
         if(data[i]){ //dismiss the emty ones
           if(data[i].src===undefined){//dismiss the emty ones
             continue
           }
           data[i].location= data[i].location.split(",")
           this.images.push(data[i]);
         } 
       }
     });
   }
  ngOnInit(): void {
  }
}
