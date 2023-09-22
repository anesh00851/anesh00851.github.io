import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo-object-description',
  templateUrl: './demo-object-description.component.html',
  styleUrls: ['./demo-object-description.component.scss']
})
export class DemoObjectDescriptionComponent implements OnInit {  
  
  constructor() {
   }

  ngOnInit(): void {
  }

  getrectcoordinates() {
  }

  makeAvisible(acircle: HTMLElement, aline: HTMLElement) {
    acircle.style.visibility='visible';
    aline.style.visibility='visible';
  }

}
