import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageService } from 'src/app/services/imageService/image.service';
import { PrivateModeService } from 'src/app/services/privateModeService/private-mode.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  images: any[];
  isFavIsPriv: FormGroup
  isFav: any
  constructor(fb: FormBuilder, private imageService: ImageService, private privateModeService: PrivateModeService) {
    this.images = [];
    // this.isFavIsPriv=({isFav:this.isFav,isPrivate:this.privateModeService.getPrivateStat()})
    this.isFavIsPriv = fb.group({
      isfav: "true",
      isPrivate: "true"
    })

    this.imageService.getAllImagesJsons(this.isFavIsPriv.value).subscribe((data: any) => {


      for (let i = 0; i < data.length; i++) {
        if(data[i]){ //dismiss the emty ones
          if(data[i].src===undefined){//dismiss the emty ones
            continue
          }
          
          this.images.push(data[i]);

        } 
      }
    });
  }
  ngOnInit(): void {
  }

}
