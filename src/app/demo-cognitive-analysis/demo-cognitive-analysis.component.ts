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
  }

  xsmalltouchmove(event: TouchEvent,circle1:HTMLElement,circle2:HTMLElement,circle3:HTMLElement,circle4:HTMLElement,circle5:HTMLElement,circle6:HTMLElement,circle7:HTMLElement,circle8:HTMLElement,circle9:HTMLElement,circle10:HTMLElement) {
    this.polylinecoordinates += " "+event.touches[0].pageX.toString()+" "+(event.touches[0].pageY-60).toString();
    let x = event.touches[0].pageX;
    let y = event.touches[0].pageY-60;

    if (((x >= circle1.offsetLeft) && (x <= (circle1.offsetLeft + 60))) && ((y >= circle1.offsetTop) && (y <= (circle1.offsetTop+60)))) {
      circle1.style.backgroundColor = 'green';
    }
    else if (((x >= circle2.offsetLeft) && (x <= (circle2.offsetLeft + 60))) && ((y >= circle2.offsetTop) && (y <= (circle2.offsetTop+60)))) {
      circle2.style.backgroundColor = 'green';
    }
    else if (((x >= circle3.offsetLeft) && (x <= (circle3.offsetLeft + 60))) && ((y >= circle3.offsetTop) && (y <= (circle3.offsetTop+60)))) {
      circle3.style.backgroundColor = 'green';
    }
    else if (((x >= circle4.offsetLeft) && (x <= (circle4.offsetLeft + 60))) && ((y >= circle4.offsetTop) && (y <= (circle4.offsetTop+60)))) {
      circle4.style.backgroundColor = 'green';
    }
    else if (((x >= circle5.offsetLeft) && (x <= (circle5.offsetLeft + 60))) && ((y >= circle5.offsetTop) && (y <= (circle5.offsetTop+60)))) {
      circle5.style.backgroundColor = 'green';
    }
    else if (((x >= circle6.offsetLeft) && (x <= (circle6.offsetLeft + 60))) && ((y >= circle6.offsetTop) && (y <= (circle6.offsetTop+60)))) {
      circle6.style.backgroundColor = 'green';
    }
    else if (((x >= circle7.offsetLeft) && (x <= (circle7.offsetLeft + 60))) && ((y >= circle7.offsetTop) && (y <= (circle7.offsetTop+60)))) {
      circle7.style.backgroundColor = 'green';
    }
    else if (((x >= circle8.offsetLeft) && (x <= (circle8.offsetLeft + 60))) && ((y >= circle8.offsetTop) && (y <= (circle8.offsetTop+60)))) {
      circle8.style.backgroundColor = 'green';
    }
    else if (((x >= circle9.offsetLeft) && (x <= (circle9.offsetLeft + 60))) && ((y >= circle9.offsetTop) && (y <= (circle9.offsetTop+60)))) {
      circle9.style.backgroundColor = 'green';
    }
    else if (((x >= circle10.offsetLeft) && (x <= (circle10.offsetLeft + 60))) && ((y >= circle10.offsetTop) && (y <= (circle10.offsetTop+60)))) {
      circle10.style.backgroundColor = 'green';
    }
  }

  xsmalltouchend(event:TouchEvent){
  }
}
