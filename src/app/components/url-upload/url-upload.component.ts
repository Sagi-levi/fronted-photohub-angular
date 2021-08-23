import { ImageService } from './../../services/imageService/image.service';
import { Component, OnInit } from '@angular/core';
import { PexelsServiceService } from 'src/app/services/PexelsService/pexels-service.service';

@Component({
  selector: 'app-url-upload',
  templateUrl: './url-upload.component.html',
  styleUrls: ['./url-upload.component.css']
})
export class UrlUploadComponent implements OnInit {


  objectToSearch: string
  images: any[];
  filename: any;


  constructor(private pexelService: PexelsServiceService, private imageService: ImageService) {
    this.pexelService.getData(this.objectToSearch, 10)
  }
  ngOnInit(): void {
  }

  search() {
    this.images = [];
    this.pexelService.getData(this.objectToSearch, 10).subscribe((data) => {
      this.images = data.photos;
    })
  }
  convertDataUrlToBlob(dataUrl: any): Blob {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], { type: mime });
  }
  sendToService(c: any) {
    if (!this.filename) {
      alert("you need to name the file first")
      return
    }
    alert("image was picked,now edit the detalis")
    fetch(c)
    .then((e) => {
      return e.blob()
    })
    .then((blob) => {
      let b: any = blob
      b.lastModifiedDate = new Date()
      b.name = this.filename
      return b as File
    }).then((b=>{
      let file=new File([b], `${this.filename}.png`)
      this.imageService.setWebImage(file);
    }))
  }
}
