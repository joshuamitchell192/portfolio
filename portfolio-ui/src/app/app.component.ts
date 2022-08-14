import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { AboutComponent } from './about/about.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CommonModule, NavbarComponent, FooterComponent, AboutComponent]
})
export class AppComponent {
  title = 'portfolio-ui';
}
