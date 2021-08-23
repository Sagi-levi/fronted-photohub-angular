import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-screen-three',
  templateUrl: './screen-three.component.html',
  styleUrls: ['./screen-three.component.css']
})
export class ScreenThreeComponent implements OnInit {

  librarySetup: FormGroup;
  constructor(private router:Router,fb: FormBuilder){
    this.librarySetup = fb.group({
      name: "",
      description: ""
    });
   }

  ngOnInit(): void {
  }

  submitForm(){
    this.router.navigate(['/uploadings'])
  }
}
