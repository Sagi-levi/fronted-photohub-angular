import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PictureJson } from '../../models';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  //Premissions req
  postPremissions(premissions: JSON) {
    this.http.post<any>(`http://localhost:8800/api/premissionsModes/changePremissions`, premissions).subscribe(
      (res: any) => {
        console.log("res", res)
      },
      (err: any) => {
        console.log(err)
      }
    );
  }

  getPremissions(): any {
    return this.http.get<JSON>(`http://localhost:8800/api/premissionsModes`)
  }

  //categories req
  postCategories(premissions: JSON) {
    this.http.post<any>(`http://localhost:8800/api/addCategory`, premissions).subscribe(
      (res: any) => {
        console.log("res", res),
          alert('uploaded secceeded')
      },
      (err: any) => {
        console.log(err),
          alert('uploaded faild')
      }
    );
  }
  getCategories(): any {
    return this.http.get<JSON>(`http://localhost:8800/api/getAllCategoreis`)
  }
  //upload pic
  uploadPicSrc(image: any) {
    const formData = new FormData();
    formData.append('file', image);
    console.log(formData);
    this.http.post<any>('http://localhost:8800/api/pic/UploadPicSrc', formData).subscribe(
      (res) => {
        console.log(res),
          alert('uploaded secceeded')
      },
      (err) => {
        console.log(err),
          alert('uploaded faild')
      }
    );
  }
  uploadPicJson(imageJson: any) {
    this.http.post<any>(`http://localhost:8800/api/pic/UploadPicJson`, imageJson).subscribe(
      (res: any) => {
        console.log("res", res)
      },
      (err: any) => {
        console.log(err)
      }
    );
  }
}
