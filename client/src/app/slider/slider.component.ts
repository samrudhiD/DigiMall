import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  Images = ['../assets/img/image1.jpg', '../assets/img/image2.jpg', '../assets/img/image4.jpg', '../assets/img/image5.jpg'];  
  
  SlideOptions = { items: 1, dots: true, nav: true, autoplay:1000,  rewind:true };  
  CarouselOptions = { items: 3, dots: true, nav: true, loop:true  };
  
  constructor() { }

  ngOnInit() {
  }

}
