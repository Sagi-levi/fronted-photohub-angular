import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService {


  
  constructor(private http: HttpClient) { }
  //password req
    getPassword(): any {
      return this.http.get<JSON>(`http://localhost:8800/api/password/getPassword`)
    }
    postPassword(password: any) {
      this.http.post<any>(`http://localhost:8800/api/password/setPassword`, password).subscribe(
        (res: any) => {
          console.log("res", res)
        },
        (err: any) => {
          console.log(err)
        }
      );
    }
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
    this.http.post<any>(`http://localhost:8800/api/category/addCategory`, premissions).subscribe(
      (res: any) => {
        console.log(premissions);
        
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
    return this.http.get<JSON>(`http://localhost:8800/api/category/getAllCategoreis`)
  }
  //upload pic
  
  uploadPicSrc(image: any) {
    const formData = new FormData();
    formData.append('file', image);
console.log( "formdata",formData);

    this.http.post<any>('http://localhost:8800/api/pic/UploadPicSrc', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
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
  getAllImagesJsons(isFavIsPriv:any){
    return this.http.post<JSON>(`http://localhost:8800/api/pic/getAllPics`,isFavIsPriv)
  }
  //private req
  getPrivateStat(){
    return this.http.get<JSON>(`http://localhost:8800/api/secretMode`)
  }
  setPrivateStat(password:any) {
    return this.http.post<JSON>(`http://localhost:8800/api/auth/login`,password)
  }
  logoutPrivateStat() {
    return this.http.post<JSON>(`http://localhost:8800/api/auth/logout`,"mock")
  }
}
