import { SlideShowComponent } from './pages/displays/slide-show/slide-show.component';
import { EditCategoriesComponent } from './pages/edit-categories/edit-categories.component';
import { GirdDisplayComponent } from './pages/displays/gird-display/gird-display.component';
import { ListDisplayComponent } from './pages/displays/list-display/list-display.component';
import { UplodingsComponent } from './pages/uplodings/uplodings.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { WelcomComponent } from './pages/welcom/welcom.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ScreenThreeComponent } from './pages/screen-three/screen-three.component';

const routes: Routes = [
  {path:'',component:WelcomComponent},
  {path:'permissions',component:PermissionsComponent},
  {path:'uploadings',component:UplodingsComponent},
  {path:'listDisplay',component:ListDisplayComponent},
  {path:'gridDisplay',component:GirdDisplayComponent},
  {path:'editCategories',component:EditCategoriesComponent},
  {path:'login',component:LoginComponent},
  {path:'screenThree',component:ScreenThreeComponent},
  {path:'slideShow',component:SlideShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
