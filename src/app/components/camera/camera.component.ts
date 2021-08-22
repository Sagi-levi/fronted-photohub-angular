import { ImageService } from './../../services/imageService/image.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit {
  constructor( private imageService: ImageService) {  }
  WIDTH = 640;
  HEIGHT = 480;
 
  @ViewChild("video")
  public video: ElementRef;
  
  @ViewChild("canvas")
  public canvas: ElementRef;
  
  captures: string[] = [];
  error: any;
  currentImageId!:number;
  file:any;
  
  async ngAfterViewInit() {
    await this.setupDevices();
  }
  
  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
      }
    }
  }
  
  capture() {
    this.drawImageToCanvas(this.video.nativeElement);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    console.log(this.canvas.nativeElement.toDataURL("image/png"));
    
  }
  upload(){
    this.imageService.images=this.file;
    alert(this.file.type+" "+this.file.name)
    this.imageService.onSubmit();
  }
  
  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
    .getContext("2d")
    .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }
  convertDataUrlToBlob(dataUrl:any): Blob {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], {type: mime});
}

  chooseImage(currentImageId:number){
    this.currentImageId= currentImageId;
    alert(this.currentImageId)
    this.file = new File([this.convertDataUrlToBlob(this.captures[this.currentImageId])],' .png', {type: `image/png`});
  }
}
