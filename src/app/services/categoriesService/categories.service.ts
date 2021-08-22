import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpService :HttpService) { }
  postCategories(categories: JSON) {
    this.httpService.postCategories(categories);
  }
  getCategories(): any {
    return this.httpService.getCategories();
  }
}
