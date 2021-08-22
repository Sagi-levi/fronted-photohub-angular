import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremissionsService {

  constructor(private httpService: HttpService) { }
  postPremissions(premissions: any) {
    this.httpService.postPremissions(premissions);
  }
  getPremissions() {
    return this.httpService.getPremissions();
  }
}
