import { ImageService } from './../../services/imageService/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-pic',
  templateUrl: './storage-pic.component.html',
  styleUrls: ['./storage-pic.component.css']
})
export class StoragePicComponent implements OnInit {
  title = 'fileUpload';
  images:any;
  constructor(private imageService: ImageService){}
  ngOnInit(){
  }
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);
this.imageService.images=formData;
console.log(this.imageService.images);

  }


  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };
}
}
