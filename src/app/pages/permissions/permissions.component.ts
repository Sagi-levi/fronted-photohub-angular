import { PremissionsService } from './../../services/premissionsSevice/premissions.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router"
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {


  ngOnInit(): void {
  }
  premissions: FormGroup;

  constructor(fb: FormBuilder,private premissionsService: PremissionsService,private router: Router) {
    this.premissions = fb.group({
      camera: false,
      storage:false,
      webSource:false
    });
  }
  setPremissions(){
    this.premissionsService.postPremissions(this.premissions.value)
    this.router.navigate(['/uploadings'])
  }
}
