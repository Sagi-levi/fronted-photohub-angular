import { PremissionsService } from './../../services/premissionsSevice/premissions.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router"
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {


  ngOnInit(): void {
  }
  premissions: FormGroup;
  password: FormGroup;
  existPassword: any
  constructor(fb: FormBuilder, private premissionsService: PremissionsService, private router: Router) {
    this.premissionsService.getCurrentPassword().subscribe((data: any)=>{
      this.existPassword=data.password;
        
    });
   
    this.premissions = fb.group({
      camera: false,
      location: false
    });

    this.password = fb.group({
      password: this.existPassword
    });
  }
  setPremissions() {
    this.premissionsService.postPremissions(this.premissions.value)
    this.router.navigate(['/screenThree'])
  }
  setPassword() {
    if (this.password.value){
      this.premissionsService.setPassword(this.password.value)
      alert("password has been set")
    }
    
    else {
      alert("password is empty")
    }

  }
}
