import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': '563492ad6f917000010000013f2355b0217b4b54ae088d21e99db9c2'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PexelsServiceService {

  constructor(private http: HttpClient) { }
  getData(objectToSearch: any, perPage: any): Observable<any> {
   
    const url = "https://api.pexels.com/v1/search?query=" + objectToSearch + "&per_page=" + perPage;
    return this.http.get<any>(url, httpOptions);
  }
}
