import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafePageComponent } from './cafe-page/cafe-page.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'cafe/:id', component:CafePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
