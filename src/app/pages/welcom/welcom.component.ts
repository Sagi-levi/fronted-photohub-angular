import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToPepremissions(){
    this.router.navigate(['/permissions'])
  }
}
