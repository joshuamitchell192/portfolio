import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [AboutComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
