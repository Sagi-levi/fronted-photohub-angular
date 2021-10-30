import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  lat: number;
  lng: number;
  @Input() latSTR: number;
  @Input() lngSTR: number;
  @Input() displayOnly:any
  @Output() newItemEvent = new EventEmitter<any>();
  constructor() {
  }
  placeMarkerAndPenTo(Latting: google.maps.LatLng, map: google.maps.Map) {
    this.lat = Latting.lat();
    this.lng = Latting.lng();
    this.newItemEvent.emit([this.lat, this.lng]);
  }
  mapReady(map: any) {
    if(!this.displayOnly){
      
      map.addListener("click", (e: any) => {
        // pass clicked position and the map ref
        this.placeMarkerAndPenTo(e.latLng, map);
      });
    }
  }

  ngOnInit(): void {
    if (this.latSTR) {
      this.lat = +this.latSTR
      this.lng = +this.lngSTR
    }
    else {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }

  }

}
