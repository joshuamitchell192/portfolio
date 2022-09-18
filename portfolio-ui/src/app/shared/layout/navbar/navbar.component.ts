import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule]
})
export class NavbarComponent implements OnInit {

  private themeSetting: boolean;

  constructor() { 
    this.themeSetting = false;
  }

  ngOnInit(): void {
    this.themeSetting = false;
  }

  changeTheme(): void {
    this.themeSetting = !this.themeSetting;

    if (this.themeSetting)
    {
      document.getElementById("theme-img")?.setAttribute("src", "/assets/images/moon.svg");
      document.getElementById("")
      document.body.classList.add("dark-theme");
    }
    else {
      document.getElementById("theme-img")?.setAttribute("src", "/assets/images/sun.svg");
      document.body.classList.remove("dark-theme");
    }
  }

}
