import { ImageService } from './../../services/imageService/image.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit {
  uuidValue: string;
  constructor(private imageService: ImageService) {
    this.captures = [];
  }
  @ViewChild("video")
  public video: ElementRef;
  error: any;
  filename:string
  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

  public ngOnInit() { }

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

  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
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
  sendToService(c: any) {
    if(!this.filename){
      alert("you need to name the file first")
      return
    }
    alert("image was picked,now edit the detalis")
    let file=new File([this.convertDataUrlToBlob(c)], `${this.filename}.png`)
    this.imageService.setWebImage(file);
  }
}
