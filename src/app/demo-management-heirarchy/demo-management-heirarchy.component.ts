import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-demo-management-heirarchy',
  templateUrl: './demo-management-heirarchy.component.html',
  styleUrls: ['./demo-management-heirarchy.component.scss']
})
export class DemoManagementHeirarchyComponent implements OnInit {

  destroyed = new Subject<void>();
  currentScreenSize!: string;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  rowonecolor: string = 'lightblue';
  rowtwocolor: string = '#DDBDF1';
  @ViewChild('div1', { static: false }) div1!: ElementRef;
  x: string = '';
  y: string = '';
  width: string = '';
  height: string = '';
  top: string = '';

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

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.div1.nativeElement.addEventListener("touchmove", (event: any) => {
      let rect = event.target.getBoundingClientRect();
      this.x = rect.x;
      this.y = rect.y;
      this.width = rect.width;
      this.height = rect.height;
      this.top = rect.top;
    });

    this.div1.nativeElement.addEventListener("mousedown", (event: any) => {
      window.onmousemove=(e)=>{
        this.getRect(event);
      }
    });

    this.div1.nativeElement.addEventListener("mouseup", (event: any) => {
      window.removeEventListener('mousemove',this.getRect);
    });

  }

  getRect(event:any){
    let rect = event.target.getBoundingClientRect();
    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;
    this.top = rect.top;
  }

}
