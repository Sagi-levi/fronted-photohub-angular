import { FormGroup, FormBuilder } from '@angular/forms';
import { PrivateModeService } from './../../services/privateModeService/private-mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: FormGroup
  constructor(fb: FormBuilder, private PrivateModeService: PrivateModeService) {
    this.password = fb.group({
      password: ""
    })
  }
login(){
  console.log(this.password.value);
  
  this.PrivateModeService.setPrivateStat(this.password.value).subscribe(data=>{
    alert(data)
  })
}
logout(){
  this.PrivateModeService.loguotPrivateStat().subscribe(data=>{
    alert(data)
  })
}
  ngOnInit(): void {
  }
}
