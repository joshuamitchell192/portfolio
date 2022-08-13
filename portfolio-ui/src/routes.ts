import {Routes} from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { WorkComponent } from './app/work/work.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: "home" }},
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkComponent }
]

export default routes;
