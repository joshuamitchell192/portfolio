import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  private activeSection: number;
  private sectionObserver;
  constructor() { 
    this.activeSection = 0;
    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log( entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // make the carousel item active as well
          const activeItem = document.querySelectorAll(".custom-carousel-item.active");
          activeItem?.forEach((item) => {
            item.classList.remove("active");
          });

          const attr = entry.target.attributes.getNamedItem("sectionNumber")?.value;
          console.log(attr);
          const carouselItem = document.getElementById("carousel-item-" + attr);
          carouselItem?.classList.add("active");

        }
        else {
          entry.target.classList.remove('show');
        }
      })
    });
  }

  ngOnInit(): void {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => this.sectionObserver.observe(el));
  }

  scroll(el: HTMLElement, sectionNumber: number) {
    el.scrollIntoView({behavior: 'smooth'});

    this.activeSection = sectionNumber;

    let sectionCarouselItems = document.getElementsByClassName("custom-carousel-item")[sectionNumber];
    

    if (this.activeSection == 0)
    {
      
      sectionCarouselItems.classList.add("active");
    }
  }

}
