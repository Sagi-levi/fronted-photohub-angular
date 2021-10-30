import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateModeService {
  constructor(private httpService: HttpService) { }
  loguotPrivateStat() {
   return this.httpService.logoutPrivateStat()
  }
  getPrivateStat() {
   return this.httpService.getPrivateStat()
  }
  loginPrivateStat(password:any){
    return this.httpService.setPrivateStat(password)
  }
}
