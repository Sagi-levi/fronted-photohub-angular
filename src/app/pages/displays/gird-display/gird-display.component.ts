import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ImageService } from 'src/app/services/imageService/image.service';
import { PrivateModeService } from 'src/app/services/privateModeService/private-mode.service';

@Component({
  selector: 'app-gird-display',
  templateUrl: './gird-display.component.html',
  styleUrls: ['./gird-display.component.css']
})
export class GirdDisplayComponent implements OnInit {
  captionSearch = '';
  images: any[];
  isFavIsPriv: FormGroup
  isFav: any
  privateMode: any;
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
