//built in imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//new

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';

//matirial
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

//components
import { AppComponent } from './components/appComponent/app.component';
import { NavComponent } from './components/nav/nav.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { WelcomComponent } from './pages/welcom/welcom.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { UplodingsComponent } from './pages/uplodings/uplodings.component';
import { CameraComponent } from './components/camera/camera.component';
import { StoragePicComponent } from './components/storage-pic/storage-pic.component';
import { UrlUploadComponent } from './components/url-upload/url-upload.component';
import { GirdDisplayComponent } from './pages/displays/gird-display/gird-display.component';
import { ListDisplayComponent } from './pages/displays/list-display/list-display.component';
import { SingleSiplayComponent } from './pages/displays/single-siplay/single-siplay.component';
import { DialogImageComponent } from './dialog-image/dialog-image.component';
import { SlideShowComponent } from './pages/displays/slide-show/slide-show.component';
import { EditCategoriesComponent } from './pages/edit-categories/edit-categories.component';
import { LoginComponent } from './pages/login/login.component';
import { ScreenThreeComponent } from './pages/screen-three/screen-three.component';
import { CarouselComponent } from './pages/displays/carousel/carousel.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GoogleMapsComponent,
    WelcomComponent,
    PermissionsComponent,
    UplodingsComponent,
    CameraComponent,
    StoragePicComponent,
    UrlUploadComponent,
    GirdDisplayComponent,
    ListDisplayComponent,
    SingleSiplayComponent,
    DialogImageComponent,
    SlideShowComponent,
    EditCategoriesComponent,
    LoginComponent,
    ScreenThreeComponent,
    CarouselComponent,
    AboutComponent
  ],
  imports: [
    //matirial
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,

    //built in imports
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //new
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZDioY8D0NmiitCsqXxa5WIr_3N8FvrzM'
    }),
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
