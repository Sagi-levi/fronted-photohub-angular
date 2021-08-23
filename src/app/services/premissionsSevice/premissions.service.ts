import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremissionsService {
  currentPassword: any;
  constructor(private httpService: HttpService) {

}
  setPassword(password: any) {
    this.httpService.postPassword(password)
  }
  getCurrentPassword(){
    return this.httpService.getPassword();
  }
  postPremissions(premissions: any) {
    this.httpService.postPremissions(premissions);
  }
  
  getPremissions() {
    return this.httpService.getPremissions();
  }
}
