import {Routes} from '@angular/router';
import { HomeComponent } from './app/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: "home" }},
  { path: '', component: HomeComponent }
]

export default routes;
