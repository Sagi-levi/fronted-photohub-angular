import { UplodingsComponent } from './pages/uplodings/uplodings.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { WelcomComponent } from './pages/welcom/welcom.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:WelcomComponent},
  {path:'permissions',component:PermissionsComponent},
  {path:'uploadings',component:UplodingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
