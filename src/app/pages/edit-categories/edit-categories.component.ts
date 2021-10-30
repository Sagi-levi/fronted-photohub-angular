import { Router } from '@angular/router';
import { CategoriesService } from './../../services/categoriesService/categories.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  categories: any
  newCategory: FormGroup
  constructor(private router: Router, fb: FormBuilder, private CategoriesService: CategoriesService) {
    this.newCategory = fb.group({
      newCategory: new FormControl()
    })

  }
  postcatefory(category: any) {
    this.CategoriesService.postCategories(category)
    this.CategoriesService.getCategories().subscribe((data: any) => {
      this.categories = data;
    })
  }
  submitForm() {
    if (this.newCategory.status === 'INVALID') {
      alert("you have to fill all fields")
    } else {
      this.postcatefory(this.newCategory.value)
    }
    
    this.refreshPage()
  }
  refreshPage() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  ngOnInit(): void {
    this.CategoriesService.getCategories().subscribe((data: any) => {
      this.categories = data;
    })
  }

}


