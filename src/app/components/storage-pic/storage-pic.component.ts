import { ImageService } from './../../services/imageService/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-pic',
  templateUrl: './storage-pic.component.html',
  styleUrls: ['./storage-pic.component.css']
})
export class StoragePicComponent implements OnInit {
  message:string
  imagePath: any;
  imgURL: any;
  constructor(private imageService: ImageService){}
  ngOnInit(){
  }
  selectImage(event:any) {
    this.imageService.selectImage(event);
  }

}
