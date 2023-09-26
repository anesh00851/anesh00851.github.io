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

  removemouselistener(svgref: HTMLElement) {
    this.togglemouseaction = false;
    svgref.removeEventListener('mousemove', () => { });
  }
}
