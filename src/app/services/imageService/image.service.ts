import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  title = 'fileUpload';
  images:FormData;
  imageJson:NgForm
  constructor(private httpService: HttpService){}
  
  ngOnInit(){}
  
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  
  onSubmit(){
    console.log(this.images.get.name);
    this.httpService.uploadPicSrc(this.images);
    this.imageJson.setValue({"src":this.images.get.name})
    this.httpService.uploadPicJson(this.imageJson)
    
  }
}
