import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  title = 'fileUpload';

  image:any;
  imageJson:FormGroup;
  fileName:any;
  constructor(private httpService: HttpService){}
  ngOnInit(){}
  
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      this.fileName=file.name
    }
    console.log("service",this.image);  //works
  }
  setWebImage(fileImage:any){
    this.image = fileImage;
    this.fileName=fileImage.name
  }
  setImageJson(imageJson:FormGroup){
    imageJson.patchValue({src:this.fileName})
    if(imageJson.value.name===null)
    imageJson.patchValue({name:this.fileName})
    
    this.imageJson=imageJson
    console.log("כע",this.imageJson.value);
    
  }
  onSubmit(){
    console.log("service filename",this.fileName);
    this.httpService.uploadPicSrc(this.image);
    this.httpService.uploadPicJson(this.imageJson.value);
  }
  getAllImagesJsons(isFavIsPriv:any){
   return this.httpService.getAllImagesJsons(isFavIsPriv);
  }
}
