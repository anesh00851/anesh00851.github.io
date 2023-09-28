import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-demo-cognitive-analysis',
  templateUrl: './demo-cognitive-analysis.component.html',
  styleUrls: ['./demo-cognitive-analysis.component.scss']
})
export class DemoCognitiveAnalysisComponent implements OnInit {
  polylinecoordinates="";
  togglemouseaction: boolean=false;
  circlelist:string[]=[];
  destroyed = new Subject<void>();
  currentScreenSize!: string;
  circle1istranslated:boolean=false;
  circle2istranslated:boolean=false;
  circle3istranslated:boolean=false;
  circle4istranslated:boolean=false;
  circle5istranslated:boolean=false;
  circle6istranslated:boolean=false;
  circle7istranslated:boolean=false;
  circle8istranslated:boolean=false;
  circle9istranslated:boolean=false;
  circle10istranslated:boolean=false;

  thiscircleistouchstarted:string="";

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
        }
      }
    });
   }

  ngOnInit(): void {
  }

  closemodal(modalcontent: HTMLElement) {
    modalcontent.style.display = "none";
  }

  onmousedownanycircle(circle:HTMLElement) {
    this.togglemouseaction = true;
    circle.style.backgroundColor='green';
    this.circlelist.push(circle.innerText);
    this.polylinecoordinates = (circle.offsetLeft+30).toString()+" "+(circle.offsetTop+30).toString();
  }

  onsvgmouseup(svgref: HTMLElement){
    this.togglemouseaction = false;
    svgref.removeEventListener('mousemove', () => { });
  }

  onsvgmousemove(event:any) {
    if(this.togglemouseaction){
      this.polylinecoordinates += " "+event.offsetX.toString()+" "+event.offsetY.toString();
    }
  }

  changecirclecolor(circle: HTMLElement,svgref: HTMLElement) {
    if (this.togglemouseaction) {
      circle.style.backgroundColor = 'green';
      this.circlelist.push(circle.innerText);
      if (this.circlelist.length == 10) {
        console.log(this.circlelist.length);
        this.togglemouseaction = false;
        svgref.removeEventListener('mousemove', () => { });
      }
    }
  }

  xsmallchangecirclecolor(event:Event,circle: HTMLElement,svgref: HTMLElement) {
    event.stopPropagation();
    if (this.togglemouseaction) {
      circle.style.backgroundColor = 'green';
      this.circlelist.push(circle.innerText);
      if (this.circlelist.length == 10) {
        console.log(this.circlelist.length);
        this.togglemouseaction = false;
        svgref.removeEventListener('mousemove', () => { });
      }
    }
  }

  removemouselistener(svgref: HTMLElement) {
    this.togglemouseaction = false;
    svgref.removeEventListener('mousemove', () => { });
  }

  xsmalltouchstart(element:HTMLElement) {
    this.polylinecoordinates = (element.offsetLeft+30).toString()+" "+(element.offsetTop+30).toString();
    this.circlelist[0] = element.innerText;
    this.thiscircleistouchstarted = element.innerText;
  }

  xsmalltouchmove(event: TouchEvent,circle1:HTMLElement,circle2:HTMLElement,circle3:HTMLElement,circle4:HTMLElement,circle5:HTMLElement,circle6:HTMLElement,circle7:HTMLElement,circle8:HTMLElement,circle9:HTMLElement,circle10:HTMLElement) {
    this.polylinecoordinates += " "+event.touches[0].pageX.toString()+" "+(event.touches[0].pageY-60).toString();
    let x = event.touches[0].pageX;
    let y = event.touches[0].pageY-60;

    if (((x >= circle1.offsetLeft) && (x <= (circle1.offsetLeft + 60))) && ((y >= circle1.offsetTop) && (y <= (circle1.offsetTop+60)))) {
      circle1.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "1"){
        if(this.circle1istranslated == false){
          this.getcirclelistlength(circle1);
        }
      }
      this.circle1istranslated = true;
    }
    else if (((x >= circle2.offsetLeft) && (x <= (circle2.offsetLeft + 60))) && ((y >= circle2.offsetTop) && (y <= (circle2.offsetTop+60)))) {
      circle2.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "2"){
        if(this.circle2istranslated == false){
          this.getcirclelistlength(circle2);
        }
      }
      this.circle2istranslated = true;
    }
    else if (((x >= circle3.offsetLeft) && (x <= (circle3.offsetLeft + 60))) && ((y >= circle3.offsetTop) && (y <= (circle3.offsetTop+60)))) {
      circle3.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "3"){
        if(this.circle3istranslated == false){
          this.getcirclelistlength(circle3);
        }
      }
      this.circle3istranslated = true;
    }
    else if (((x >= circle4.offsetLeft) && (x <= (circle4.offsetLeft + 60))) && ((y >= circle4.offsetTop) && (y <= (circle4.offsetTop+60)))) {
      circle4.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "4"){
        if(this.circle4istranslated == false){
          this.getcirclelistlength(circle4);
        }
      }
      this.circle4istranslated = true;
    }
    else if (((x >= circle5.offsetLeft) && (x <= (circle5.offsetLeft + 60))) && ((y >= circle5.offsetTop) && (y <= (circle5.offsetTop+60)))) {
      circle5.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "5"){
        if(this.circle5istranslated == false){
          this.getcirclelistlength(circle5);
        }
      }
      this.circle5istranslated = true;
    }
    else if (((x >= circle6.offsetLeft) && (x <= (circle6.offsetLeft + 60))) && ((y >= circle6.offsetTop) && (y <= (circle6.offsetTop+60)))) {
      circle6.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "6"){
        if(this.circle6istranslated == false){
          this.getcirclelistlength(circle6);
        }
      }
      this.circle6istranslated = true;
    }
    else if (((x >= circle7.offsetLeft) && (x <= (circle7.offsetLeft + 60))) && ((y >= circle7.offsetTop) && (y <= (circle7.offsetTop+60)))) {
      circle7.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "7"){
        if(this.circle7istranslated == false){
          this.getcirclelistlength(circle7);
        }
      }
      this.circle7istranslated = true;
    }
    else if (((x >= circle8.offsetLeft) && (x <= (circle8.offsetLeft + 60))) && ((y >= circle8.offsetTop) && (y <= (circle8.offsetTop+60)))) {
      circle8.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "8"){
        if(this.circle8istranslated == false){
          this.getcirclelistlength(circle8);
        }
      }
      this.circle8istranslated = true;
    }
    else if (((x >= circle9.offsetLeft) && (x <= (circle9.offsetLeft + 60))) && ((y >= circle9.offsetTop) && (y <= (circle9.offsetTop+60)))) {
      circle9.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "9"){
        if(this.circle9istranslated == false){
          this.getcirclelistlength(circle9);
        }
      }
      this.circle9istranslated = true;
    }
    else if (((x >= circle10.offsetLeft) && (x <= (circle10.offsetLeft + 60))) && ((y >= circle10.offsetTop) && (y <= (circle10.offsetTop+60)))) {
      circle10.style.backgroundColor = 'green';
      if(this.thiscircleistouchstarted != "10"){
        if(this.circle10istranslated == false){
          this.getcirclelistlength(circle10);
        }
      }
      this.circle10istranslated = true;
    }
  }

  xsmalltouchend(event:TouchEvent){
  }

  getcirclelistlength(circle:HTMLElement){
    let length = this.circlelist.length;
    switch (length) {
      case 1:
        this.circlelist[1] = circle.innerText;
        break;
      case 2:
        this.circlelist[2] = circle.innerText;
        break;
      case 3:
        this.circlelist[3] = circle.innerText;
        break;
      case 4:
        this.circlelist[4] = circle.innerText;
        break;
      case 5:
        this.circlelist[5] = circle.innerText;
        break;
      case 6:
        this.circlelist[6] = circle.innerText;
        break;
      case 7:
        this.circlelist[7] = circle.innerText;
        break;
      case 8:
        this.circlelist[8] = circle.innerText;
        break;
      case 9:
        this.circlelist[9] = circle.innerText;
        break;
      case 10:
        this.circlelist[10] = circle.innerText;
        break;
      default:
        return;
    }
  }
}
