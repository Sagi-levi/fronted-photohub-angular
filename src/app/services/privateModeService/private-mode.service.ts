import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateModeService {
  loguotPrivateStat() {
    
   return this.httpService.logoutPrivateStat()
  }
  getPrivateStat() {
   return this.httpService.getPrivateStat()
  }
  setPrivateStat(password:any){
    return this.httpService.setPrivateStat(password)
  }
  
  constructor(private httpService: HttpService) { }
}
