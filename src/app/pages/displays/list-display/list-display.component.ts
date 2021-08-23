
import { map } from 'rxjs/operators';
import { PrivateModeService } from './../../../services/privateModeService/private-mode.service';
import { ImageService } from './../../../services/imageService/image.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {
  images: any[];
  isFavIsPriv: FormGroup
  isFav: any
  count=0;
  constructor(fb: FormBuilder, private imageService: ImageService, private privateModeService: PrivateModeService) {
    this.images = [];
    // this.isFavIsPriv=({isFav:this.isFav,isPrivate:this.privateModeService.getPrivateStat()})
    this.isFavIsPriv = fb.group({
      isfav: "true",
      isPrivate: "true"
    })
    
    this.imageService.getAllImagesJsons(this.isFavIsPriv.value).subscribe((data: any) => {
console.log("dataaa",data);

      while (data[this.count]) {
        console.log(this.count);
        this.images.push(data[this.count]);
        this.count += 1
      }
      this.count=0
    });
  }
  ngOnInit(): void {
  }
}
