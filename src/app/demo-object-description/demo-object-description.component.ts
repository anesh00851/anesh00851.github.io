import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subject, takeUntil } from 'rxjs';
import { DemoMatBottomSheetComponent } from '../demo-mat-bottom-sheet/demo-mat-bottom-sheet.component';

@Component({
  selector: 'app-demo-object-description',
  templateUrl: './demo-object-description.component.html',
  styleUrls: ['./demo-object-description.component.scss']
})
export class DemoObjectDescriptionComponent implements OnInit {
  destroyed = new Subject<void>();
  currentScreenSize!: string;
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  
  constructor(breakpointObserver: BreakpointObserver,private _bottomSheet: MatBottomSheet) {
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

  openBottomSheet(){
    console.log('1');
    this._bottomSheet.open(DemoMatBottomSheetComponent);
  }

  makeAvisible(acircle: HTMLElement, aline: HTMLElement, aline1: HTMLElement, arect: HTMLElement, atext: HTMLElement, bcircle: HTMLElement, bline: HTMLElement, bline1: HTMLElement, brect: HTMLElement, btext: HTMLElement,
    cdefg1circle: HTMLElement, cdefg1line: HTMLElement, cdefg2circle: HTMLElement, cdefg2line: HTMLElement, cdefg3circle: HTMLElement, cdefg3line: HTMLElement, cdefg4circle: HTMLElement,
    cdefg4line: HTMLElement, cdefg5circle: HTMLElement, cdefg5line: HTMLElement, cdefg6line: HTMLElement, cdefg7line: HTMLElement, cdefgrect: HTMLElement, cdefgtext: HTMLElement,
    hcircle: HTMLElement, hline: HTMLElement, icircle: HTMLElement, iline: HTMLElement, jcircle: HTMLElement, jline: HTMLElement, hijline: HTMLElement, hijrect: HTMLElement, hijtext: HTMLElement,
    kcircle: HTMLElement, kline: HTMLElement, krect: HTMLElement, ktext: HTMLElement) {
    acircle.style.visibility = 'visible';
    aline.style.visibility = 'visible';
    aline1.style.visibility = 'visible';
    arect.style.visibility = 'visible';
    atext.style.visibility = 'visible';

    bcircle.style.visibility = 'hidden';
    bline.style.visibility = 'hidden';
    bline1.style.visibility = 'hidden';
    brect.style.visibility = 'hidden';
    btext.style.visibility = 'hidden';

    cdefg1circle.style.visibility = 'hidden';
    cdefg1line.style.visibility = 'hidden';
    cdefg2circle.style.visibility = 'hidden';
    cdefg2line.style.visibility = 'hidden';
    cdefg3circle.style.visibility = 'hidden';
    cdefg3line.style.visibility = 'hidden';
    cdefg4circle.style.visibility = 'hidden';
    cdefg4line.style.visibility = 'hidden';
    cdefg5circle.style.visibility = 'hidden';
    cdefg5line.style.visibility = 'hidden';
    cdefg6line.style.visibility = 'hidden';
    cdefg7line.style.visibility = 'hidden';
    cdefgrect.style.visibility = 'hidden';
    cdefgtext.style.visibility = 'hidden';

    hcircle.style.visibility = 'hidden';
    hline.style.visibility = 'hidden';
    icircle.style.visibility = 'hidden';
    iline.style.visibility = 'hidden';
    jcircle.style.visibility = 'hidden';
    jline.style.visibility = 'hidden';
    hijline.style.visibility = 'hidden';
    hijrect.style.visibility = 'hidden';
    hijtext.style.visibility = 'hidden';

    kcircle.style.visibility = 'hidden';
    kline.style.visibility = 'hidden';
    krect.style.visibility = 'hidden';
    ktext.style.visibility = 'hidden';
  }

  makeBvisible(acircle: HTMLElement, aline: HTMLElement, aline1: HTMLElement, arect: HTMLElement, atext: HTMLElement, bcircle: HTMLElement, bline: HTMLElement, bline1: HTMLElement, brect: HTMLElement, btext: HTMLElement,
    cdefg1circle: HTMLElement, cdefg1line: HTMLElement, cdefg2circle: HTMLElement, cdefg2line: HTMLElement, cdefg3circle: HTMLElement, cdefg3line: HTMLElement, cdefg4circle: HTMLElement,
    cdefg4line: HTMLElement, cdefg5circle: HTMLElement, cdefg5line: HTMLElement, cdefg6line: HTMLElement, cdefg7line: HTMLElement, cdefgrect: HTMLElement, cdefgtext: HTMLElement,
    hcircle: HTMLElement, hline: HTMLElement, icircle: HTMLElement, iline: HTMLElement, jcircle: HTMLElement, jline: HTMLElement, hijline: HTMLElement, hijrect: HTMLElement, hijtext: HTMLElement,
    kcircle: HTMLElement, kline: HTMLElement, krect: HTMLElement, ktext: HTMLElement) {
    bcircle.style.visibility = 'visible';
    bline.style.visibility = 'visible';
    bline1.style.visibility = 'visible';
    brect.style.visibility = 'visible';
    btext.style.visibility = 'visible';

    acircle.style.visibility = 'hidden';
    aline.style.visibility = 'hidden';
    aline1.style.visibility = 'hidden';
    arect.style.visibility = 'hidden';
    atext.style.visibility = 'hidden';

    cdefg1circle.style.visibility = 'hidden';
    cdefg1line.style.visibility = 'hidden';
    cdefg2circle.style.visibility = 'hidden';
    cdefg2line.style.visibility = 'hidden';
    cdefg3circle.style.visibility = 'hidden';
    cdefg3line.style.visibility = 'hidden';
    cdefg4circle.style.visibility = 'hidden';
    cdefg4line.style.visibility = 'hidden';
    cdefg5circle.style.visibility = 'hidden';
    cdefg5line.style.visibility = 'hidden';
    cdefg6line.style.visibility = 'hidden';
    cdefg7line.style.visibility = 'hidden';
    cdefgrect.style.visibility = 'hidden';
    cdefgtext.style.visibility = 'hidden';

    hcircle.style.visibility = 'hidden';
    hline.style.visibility = 'hidden';
    icircle.style.visibility = 'hidden';
    iline.style.visibility = 'hidden';
    jcircle.style.visibility = 'hidden';
    jline.style.visibility = 'hidden';
    hijline.style.visibility = 'hidden';
    hijrect.style.visibility = 'hidden';
    hijtext.style.visibility = 'hidden';

    kcircle.style.visibility = 'hidden';
    kline.style.visibility = 'hidden';
    krect.style.visibility = 'hidden';
    ktext.style.visibility = 'hidden';
  }

  togglecdefg(acircle: HTMLElement, aline: HTMLElement, aline1: HTMLElement, arect: HTMLElement, atext: HTMLElement, bcircle: HTMLElement, bline: HTMLElement, bline1: HTMLElement, brect: HTMLElement, btext: HTMLElement,
    cdefg1circle: HTMLElement, cdefg1line: HTMLElement, cdefg2circle: HTMLElement, cdefg2line: HTMLElement, cdefg3circle: HTMLElement, cdefg3line: HTMLElement, cdefg4circle: HTMLElement,
    cdefg4line: HTMLElement, cdefg5circle: HTMLElement, cdefg5line: HTMLElement, cdefg6line: HTMLElement, cdefg7line: HTMLElement, cdefgrect: HTMLElement, cdefgtext: HTMLElement,
    hcircle: HTMLElement, hline: HTMLElement, icircle: HTMLElement, iline: HTMLElement, jcircle: HTMLElement, jline: HTMLElement, hijline: HTMLElement, hijrect: HTMLElement, hijtext: HTMLElement,
    kcircle: HTMLElement, kline: HTMLElement, krect: HTMLElement, ktext: HTMLElement) {
    acircle.style.visibility = 'hidden';
    aline.style.visibility = 'hidden';
    aline1.style.visibility = 'hidden';
    arect.style.visibility = 'hidden';
    atext.style.visibility = 'hidden';

    bcircle.style.visibility = 'hidden';
    bline.style.visibility = 'hidden';
    bline1.style.visibility = 'hidden';
    brect.style.visibility = 'hidden';
    btext.style.visibility = 'hidden';

    cdefg1circle.style.visibility = 'visible';
    cdefg1line.style.visibility = 'visible';
    cdefg2circle.style.visibility = 'visible';
    cdefg2line.style.visibility = 'visible';
    cdefg3circle.style.visibility = 'visible';
    cdefg3line.style.visibility = 'visible';
    cdefg4circle.style.visibility = 'visible';
    cdefg4line.style.visibility = 'visible';
    cdefg5circle.style.visibility = 'visible';
    cdefg5line.style.visibility = 'visible';
    cdefg6line.style.visibility = 'visible';
    cdefg7line.style.visibility = 'visible';
    cdefgrect.style.visibility = 'visible';
    cdefgtext.style.visibility = 'visible';

    hcircle.style.visibility = 'hidden';
    hline.style.visibility = 'hidden';
    icircle.style.visibility = 'hidden';
    iline.style.visibility = 'hidden';
    jcircle.style.visibility = 'hidden';
    jline.style.visibility = 'hidden';
    hijline.style.visibility = 'hidden';
    hijrect.style.visibility = 'hidden';
    hijtext.style.visibility = 'hidden';

    kcircle.style.visibility = 'hidden';
    kline.style.visibility = 'hidden';
    krect.style.visibility = 'hidden';
    ktext.style.visibility = 'hidden';
  }

  togglehij(acircle: HTMLElement, aline: HTMLElement, aline1: HTMLElement, arect: HTMLElement, atext: HTMLElement, bcircle: HTMLElement, bline: HTMLElement, bline1: HTMLElement, brect: HTMLElement, btext: HTMLElement,
    cdefg1circle: HTMLElement, cdefg1line: HTMLElement, cdefg2circle: HTMLElement, cdefg2line: HTMLElement, cdefg3circle: HTMLElement, cdefg3line: HTMLElement, cdefg4circle: HTMLElement,
    cdefg4line: HTMLElement, cdefg5circle: HTMLElement, cdefg5line: HTMLElement, cdefg6line: HTMLElement, cdefg7line: HTMLElement, cdefgrect: HTMLElement, cdefgtext: HTMLElement,
    hcircle: HTMLElement, hline: HTMLElement, icircle: HTMLElement, iline: HTMLElement, jcircle: HTMLElement, jline: HTMLElement, hijline: HTMLElement, hijrect: HTMLElement, hijtext: HTMLElement,
    kcircle: HTMLElement, kline: HTMLElement, krect: HTMLElement, ktext: HTMLElement) {
    hcircle.style.visibility = 'visible';
    hline.style.visibility = 'visible';
    icircle.style.visibility = 'visible';
    iline.style.visibility = 'visible';
    jcircle.style.visibility = 'visible';
    jline.style.visibility = 'visible';
    hijline.style.visibility = 'visible';
    hijrect.style.visibility = 'visible';
    hijtext.style.visibility = 'visible';

    acircle.style.visibility = 'hidden';
    aline.style.visibility = 'hidden';
    aline1.style.visibility = 'hidden';
    arect.style.visibility = 'hidden';
    atext.style.visibility = 'hidden';

    bcircle.style.visibility = 'hidden';
    bline.style.visibility = 'hidden';
    bline1.style.visibility = 'hidden';
    brect.style.visibility = 'hidden';
    btext.style.visibility = 'hidden';

    cdefg1circle.style.visibility = 'hidden';
    cdefg1line.style.visibility = 'hidden';
    cdefg2circle.style.visibility = 'hidden';
    cdefg2line.style.visibility = 'hidden';
    cdefg3circle.style.visibility = 'hidden';
    cdefg3line.style.visibility = 'hidden';
    cdefg4circle.style.visibility = 'hidden';
    cdefg4line.style.visibility = 'hidden';
    cdefg5circle.style.visibility = 'hidden';
    cdefg5line.style.visibility = 'hidden';
    cdefg6line.style.visibility = 'hidden';
    cdefg7line.style.visibility = 'hidden';
    cdefgrect.style.visibility = 'hidden';
    cdefgtext.style.visibility = 'hidden';

    kcircle.style.visibility = 'hidden';
    kline.style.visibility = 'hidden';
    krect.style.visibility = 'hidden';
    ktext.style.visibility = 'hidden';
  }

  togglek(acircle: HTMLElement, aline: HTMLElement, aline1: HTMLElement, arect: HTMLElement, atext: HTMLElement, bcircle: HTMLElement, bline: HTMLElement, bline1: HTMLElement, brect: HTMLElement, btext: HTMLElement,
    cdefg1circle: HTMLElement, cdefg1line: HTMLElement, cdefg2circle: HTMLElement, cdefg2line: HTMLElement, cdefg3circle: HTMLElement, cdefg3line: HTMLElement, cdefg4circle: HTMLElement,
    cdefg4line: HTMLElement, cdefg5circle: HTMLElement, cdefg5line: HTMLElement, cdefg6line: HTMLElement, cdefg7line: HTMLElement, cdefgrect: HTMLElement, cdefgtext: HTMLElement,
    hcircle: HTMLElement, hline: HTMLElement, icircle: HTMLElement, iline: HTMLElement, jcircle: HTMLElement, jline: HTMLElement, hijline: HTMLElement, hijrect: HTMLElement, hijtext: HTMLElement,
    kcircle: HTMLElement, kline: HTMLElement, krect: HTMLElement, ktext: HTMLElement) {
    kcircle.style.visibility = 'visible';
    kline.style.visibility = 'visible';
    krect.style.visibility = 'visible';
    ktext.style.visibility = 'visible';

    acircle.style.visibility = 'hidden';
    aline.style.visibility = 'hidden';
    aline1.style.visibility = 'hidden';
    arect.style.visibility = 'hidden';
    atext.style.visibility = 'hidden';

    bcircle.style.visibility = 'hidden';
    bline.style.visibility = 'hidden';
    bline1.style.visibility = 'hidden';
    brect.style.visibility = 'hidden';
    btext.style.visibility = 'hidden';

    cdefg1circle.style.visibility = 'hidden';
    cdefg1line.style.visibility = 'hidden';
    cdefg2circle.style.visibility = 'hidden';
    cdefg2line.style.visibility = 'hidden';
    cdefg3circle.style.visibility = 'hidden';
    cdefg3line.style.visibility = 'hidden';
    cdefg4circle.style.visibility = 'hidden';
    cdefg4line.style.visibility = 'hidden';
    cdefg5circle.style.visibility = 'hidden';
    cdefg5line.style.visibility = 'hidden';
    cdefg6line.style.visibility = 'hidden';
    cdefg7line.style.visibility = 'hidden';
    cdefgrect.style.visibility = 'hidden';
    cdefgtext.style.visibility = 'hidden';

    hcircle.style.visibility = 'hidden';
    hline.style.visibility = 'hidden';
    icircle.style.visibility = 'hidden';
    iline.style.visibility = 'hidden';
    jcircle.style.visibility = 'hidden';
    jline.style.visibility = 'hidden';
    hijline.style.visibility = 'hidden';
    hijrect.style.visibility = 'hidden';
    hijtext.style.visibility = 'hidden';
  }

  showall(acircle: HTMLElement, aline: HTMLElement, aline1: HTMLElement, arect: HTMLElement, atext: HTMLElement, bcircle: HTMLElement, bline: HTMLElement, bline1: HTMLElement, brect: HTMLElement, btext: HTMLElement,
    cdefg1circle: HTMLElement, cdefg1line: HTMLElement, cdefg2circle: HTMLElement, cdefg2line: HTMLElement, cdefg3circle: HTMLElement, cdefg3line: HTMLElement, cdefg4circle: HTMLElement,
    cdefg4line: HTMLElement, cdefg5circle: HTMLElement, cdefg5line: HTMLElement, cdefg6line: HTMLElement, cdefg7line: HTMLElement, cdefgrect: HTMLElement, cdefgtext: HTMLElement,
    hcircle: HTMLElement, hline: HTMLElement, icircle: HTMLElement, iline: HTMLElement, jcircle: HTMLElement, jline: HTMLElement, hijline: HTMLElement, hijrect: HTMLElement, hijtext: HTMLElement,
    kcircle: HTMLElement, kline: HTMLElement, krect: HTMLElement, ktext: HTMLElement) {
    kcircle.style.visibility = 'visible';
    kline.style.visibility = 'visible';
    krect.style.visibility = 'visible';
    ktext.style.visibility = 'visible';

    acircle.style.visibility = 'visible';
    aline.style.visibility = 'visible';
    aline1.style.visibility = 'visible';
    arect.style.visibility = 'visible';
    atext.style.visibility = 'visible';

    bcircle.style.visibility = 'visible';
    bline.style.visibility = 'visible';
    bline1.style.visibility = 'visible';
    brect.style.visibility = 'visible';
    btext.style.visibility = 'visible';

    cdefg1circle.style.visibility = 'visible';
    cdefg1line.style.visibility = 'visible';
    cdefg2circle.style.visibility = 'visible';
    cdefg2line.style.visibility = 'visible';
    cdefg3circle.style.visibility = 'visible';
    cdefg3line.style.visibility = 'visible';
    cdefg4circle.style.visibility = 'visible';
    cdefg4line.style.visibility = 'visible';
    cdefg5circle.style.visibility = 'visible';
    cdefg5line.style.visibility = 'visible';
    cdefg6line.style.visibility = 'visible';
    cdefg7line.style.visibility = 'visible';
    cdefgrect.style.visibility = 'visible';
    cdefgtext.style.visibility = 'visible';

    hcircle.style.visibility = 'visible';
    hline.style.visibility = 'visible';
    icircle.style.visibility = 'visible';
    iline.style.visibility = 'visible';
    jcircle.style.visibility = 'visible';
    jline.style.visibility = 'visible';
    hijline.style.visibility = 'visible';
    hijrect.style.visibility = 'visible';
    hijtext.style.visibility = 'visible';
  }

  closemodal(modalcontent: HTMLElement) {
    console.log('1');
    modalcontent.style.display = "none";
  }

  xsmallshowall(xsmallacircle: HTMLElement, xsmallaline: HTMLElement, xsmallaline1: HTMLElement, xsmallarect: HTMLElement, xsmallatext: HTMLElement, xsmallbcircle: HTMLElement, xsmallbline: HTMLElement, xsmallbline1: HTMLElement, xsmallbrect: HTMLElement, xsmallbtext: HTMLElement,
    xsmallcdefg1circle: HTMLElement, xsmallcdefg1line: HTMLElement, xsmallcdefg2circle: HTMLElement, xsmallcdefg2line: HTMLElement, xsmallcdefg3circle: HTMLElement, xsmallcdefg3line: HTMLElement, xsmallcdefg4circle: HTMLElement,
    xsmallcdefg4line: HTMLElement, xsmallcdefg5circle: HTMLElement, xsmallcdefg5line: HTMLElement, xsmallcdefg6line: HTMLElement, xsmallcdefg7line: HTMLElement, xsmallcdefgrect: HTMLElement, xsmallcdefgtext: HTMLElement,
    xsmallhcircle: HTMLElement, xsmallhline: HTMLElement, xsmallicircle: HTMLElement, xsmalliline: HTMLElement, xsmalljcircle: HTMLElement, xsmalljline: HTMLElement, xsmallhijline: HTMLElement, xsmallhijrect: HTMLElement, xsmallhijtext: HTMLElement,
    xsmallkcircle: HTMLElement, xsmallkline: HTMLElement, xsmallkrect: HTMLElement, xsmallktext: HTMLElement) {
    xsmallkcircle.style.visibility = 'visible';
    xsmallkline.style.visibility = 'visible';
    xsmallkrect.style.visibility = 'visible';
    xsmallktext.style.visibility = 'visible';

    xsmallacircle.style.visibility = 'visible';
    xsmallaline.style.visibility = 'visible';
    xsmallaline1.style.visibility = 'visible';
    xsmallarect.style.visibility = 'visible';
    xsmallatext.style.visibility = 'visible';

    xsmallbcircle.style.visibility = 'visible';
    xsmallbline.style.visibility = 'visible';
    xsmallbline1.style.visibility = 'visible';
    xsmallbrect.style.visibility = 'visible';
    xsmallbtext.style.visibility = 'visible';

    xsmallcdefg1circle.style.visibility = 'visible';
    xsmallcdefg1line.style.visibility = 'visible';
    xsmallcdefg2circle.style.visibility = 'visible';
    xsmallcdefg2line.style.visibility = 'visible';
    xsmallcdefg3circle.style.visibility = 'visible';
    xsmallcdefg3line.style.visibility = 'visible';
    xsmallcdefg4circle.style.visibility = 'visible';
    xsmallcdefg4line.style.visibility = 'visible';
    xsmallcdefg5circle.style.visibility = 'visible';
    xsmallcdefg5line.style.visibility = 'visible';
    xsmallcdefg6line.style.visibility = 'visible';
    xsmallcdefg7line.style.visibility = 'visible';
    xsmallcdefgrect.style.visibility = 'visible';
    xsmallcdefgtext.style.visibility = 'visible';

    xsmallhcircle.style.visibility = 'visible';
    xsmallhline.style.visibility = 'visible';
    xsmallicircle.style.visibility = 'visible';
    xsmalliline.style.visibility = 'visible';
    xsmalljcircle.style.visibility = 'visible';
    xsmalljline.style.visibility = 'visible';
    xsmallhijline.style.visibility = 'visible';
    xsmallhijrect.style.visibility = 'visible';
    xsmallhijtext.style.visibility = 'visible';
  }

  xsmallmakeAvisible(xsmallacircle: HTMLElement, xsmallaline: HTMLElement, xsmallaline1: HTMLElement, xsmallarect: HTMLElement, xsmallatext: HTMLElement, xsmallbcircle: HTMLElement, xsmallbline: HTMLElement, xsmallbline1: HTMLElement, xsmallbrect: HTMLElement, xsmallbtext: HTMLElement,
    xsmallcdefg1circle: HTMLElement, xsmallcdefg1line: HTMLElement, xsmallcdefg2circle: HTMLElement, xsmallcdefg2line: HTMLElement, xsmallcdefg3circle: HTMLElement, xsmallcdefg3line: HTMLElement, xsmallcdefg4circle: HTMLElement,
    xsmallcdefg4line: HTMLElement, xsmallcdefg5circle: HTMLElement, xsmallcdefg5line: HTMLElement, xsmallcdefg6line: HTMLElement, xsmallcdefg7line: HTMLElement, xsmallcdefgrect: HTMLElement, xsmallcdefgtext: HTMLElement,
    xsmallhcircle: HTMLElement, xsmallhline: HTMLElement, xsmallicircle: HTMLElement, xsmalliline: HTMLElement, xsmalljcircle: HTMLElement, xsmalljline: HTMLElement, xsmallhijline: HTMLElement, xsmallhijrect: HTMLElement, xsmallhijtext: HTMLElement,
    xsmallkcircle: HTMLElement, xsmallkline: HTMLElement, xsmallkrect: HTMLElement, xsmallktext: HTMLElement) {
    xsmallacircle.style.visibility = 'visible';
    xsmallaline.style.visibility = 'visible';
    xsmallaline1.style.visibility = 'visible';
    xsmallarect.style.visibility = 'visible';
    xsmallatext.style.visibility = 'visible';

    xsmallbcircle.style.visibility = 'hidden';
    xsmallbline.style.visibility = 'hidden';
    xsmallbline1.style.visibility = 'hidden';
    xsmallbrect.style.visibility = 'hidden';
    xsmallbtext.style.visibility = 'hidden';

    xsmallcdefg1circle.style.visibility = 'hidden';
    xsmallcdefg1line.style.visibility = 'hidden';
    xsmallcdefg2circle.style.visibility = 'hidden';
    xsmallcdefg2line.style.visibility = 'hidden';
    xsmallcdefg3circle.style.visibility = 'hidden';
    xsmallcdefg3line.style.visibility = 'hidden';
    xsmallcdefg4circle.style.visibility = 'hidden';
    xsmallcdefg4line.style.visibility = 'hidden';
    xsmallcdefg5circle.style.visibility = 'hidden';
    xsmallcdefg5line.style.visibility = 'hidden';
    xsmallcdefg6line.style.visibility = 'hidden';
    xsmallcdefg7line.style.visibility = 'hidden';
    xsmallcdefgrect.style.visibility = 'hidden';
    xsmallcdefgtext.style.visibility = 'hidden';

    xsmallhcircle.style.visibility = 'hidden';
    xsmallhline.style.visibility = 'hidden';
    xsmallicircle.style.visibility = 'hidden';
    xsmalliline.style.visibility = 'hidden';
    xsmalljcircle.style.visibility = 'hidden';
    xsmalljline.style.visibility = 'hidden';
    xsmallhijline.style.visibility = 'hidden';
    xsmallhijrect.style.visibility = 'hidden';
    xsmallhijtext.style.visibility = 'hidden';

    xsmallkcircle.style.visibility = 'hidden';
    xsmallkline.style.visibility = 'hidden';
    xsmallkrect.style.visibility = 'hidden';
    xsmallktext.style.visibility = 'hidden';
  }

  xsmallmakeBvisible(xsmallacircle: HTMLElement, xsmallaline: HTMLElement, xsmallaline1: HTMLElement, xsmallarect: HTMLElement, xsmallatext: HTMLElement, xsmallbcircle: HTMLElement, xsmallbline: HTMLElement, xsmallbline1: HTMLElement, xsmallbrect: HTMLElement, xsmallbtext: HTMLElement,
    xsmallcdefg1circle: HTMLElement, xsmallcdefg1line: HTMLElement, xsmallcdefg2circle: HTMLElement, xsmallcdefg2line: HTMLElement, xsmallcdefg3circle: HTMLElement, xsmallcdefg3line: HTMLElement, xsmallcdefg4circle: HTMLElement,
    xsmallcdefg4line: HTMLElement, xsmallcdefg5circle: HTMLElement, xsmallcdefg5line: HTMLElement, xsmallcdefg6line: HTMLElement, xsmallcdefg7line: HTMLElement, xsmallcdefgrect: HTMLElement, xsmallcdefgtext: HTMLElement,
    xsmallhcircle: HTMLElement, xsmallhline: HTMLElement, xsmallicircle: HTMLElement, xsmalliline: HTMLElement, xsmalljcircle: HTMLElement, xsmalljline: HTMLElement, xsmallhijline: HTMLElement, xsmallhijrect: HTMLElement, xsmallhijtext: HTMLElement,
    xsmallkcircle: HTMLElement, xsmallkline: HTMLElement, xsmallkrect: HTMLElement, xsmallktext: HTMLElement) {
    xsmallbcircle.style.visibility = 'visible';
    xsmallbline.style.visibility = 'visible';
    xsmallbline1.style.visibility = 'visible';
    xsmallbrect.style.visibility = 'visible';
    xsmallbtext.style.visibility = 'visible';

    xsmallacircle.style.visibility = 'hidden';
    xsmallaline.style.visibility = 'hidden';
    xsmallaline1.style.visibility = 'hidden';
    xsmallarect.style.visibility = 'hidden';
    xsmallatext.style.visibility = 'hidden';

    xsmallcdefg1circle.style.visibility = 'hidden';
    xsmallcdefg1line.style.visibility = 'hidden';
    xsmallcdefg2circle.style.visibility = 'hidden';
    xsmallcdefg2line.style.visibility = 'hidden';
    xsmallcdefg3circle.style.visibility = 'hidden';
    xsmallcdefg3line.style.visibility = 'hidden';
    xsmallcdefg4circle.style.visibility = 'hidden';
    xsmallcdefg4line.style.visibility = 'hidden';
    xsmallcdefg5circle.style.visibility = 'hidden';
    xsmallcdefg5line.style.visibility = 'hidden';
    xsmallcdefg6line.style.visibility = 'hidden';
    xsmallcdefg7line.style.visibility = 'hidden';
    xsmallcdefgrect.style.visibility = 'hidden';
    xsmallcdefgtext.style.visibility = 'hidden';

    xsmallhcircle.style.visibility = 'hidden';
    xsmallhline.style.visibility = 'hidden';
    xsmallicircle.style.visibility = 'hidden';
    xsmalliline.style.visibility = 'hidden';
    xsmalljcircle.style.visibility = 'hidden';
    xsmalljline.style.visibility = 'hidden';
    xsmallhijline.style.visibility = 'hidden';
    xsmallhijrect.style.visibility = 'hidden';
    xsmallhijtext.style.visibility = 'hidden';

    xsmallkcircle.style.visibility = 'hidden';
    xsmallkline.style.visibility = 'hidden';
    xsmallkrect.style.visibility = 'hidden';
    xsmallktext.style.visibility = 'hidden';
  }

  xsmalltogglecdefg(xsmallacircle: HTMLElement, xsmallaline: HTMLElement, xsmallaline1: HTMLElement, xsmallarect: HTMLElement, xsmallatext: HTMLElement, xsmallbcircle: HTMLElement, xsmallbline: HTMLElement, xsmallbline1: HTMLElement, xsmallbrect: HTMLElement, xsmallbtext: HTMLElement,
    xsmallcdefg1circle: HTMLElement, xsmallcdefg1line: HTMLElement, xsmallcdefg2circle: HTMLElement, xsmallcdefg2line: HTMLElement, xsmallcdefg3circle: HTMLElement, xsmallcdefg3line: HTMLElement, xsmallcdefg4circle: HTMLElement,
    xsmallcdefg4line: HTMLElement, xsmallcdefg5circle: HTMLElement, xsmallcdefg5line: HTMLElement, xsmallcdefg6line: HTMLElement, xsmallcdefg7line: HTMLElement, xsmallcdefgrect: HTMLElement, xsmallcdefgtext: HTMLElement,
    xsmallhcircle: HTMLElement, xsmallhline: HTMLElement, xsmallicircle: HTMLElement, xsmalliline: HTMLElement, xsmalljcircle: HTMLElement, xsmalljline: HTMLElement, xsmallhijline: HTMLElement, xsmallhijrect: HTMLElement, xsmallhijtext: HTMLElement,
    xsmallkcircle: HTMLElement, xsmallkline: HTMLElement, xsmallkrect: HTMLElement, xsmallktext: HTMLElement) {
    xsmallacircle.style.visibility = 'hidden';
    xsmallaline.style.visibility = 'hidden';
    xsmallaline1.style.visibility = 'hidden';
    xsmallarect.style.visibility = 'hidden';
    xsmallatext.style.visibility = 'hidden';

    xsmallbcircle.style.visibility = 'hidden';
    xsmallbline.style.visibility = 'hidden';
    xsmallbline1.style.visibility = 'hidden';
    xsmallbrect.style.visibility = 'hidden';
    xsmallbtext.style.visibility = 'hidden';

    xsmallcdefg1circle.style.visibility = 'visible';
    xsmallcdefg1line.style.visibility = 'visible';
    xsmallcdefg2circle.style.visibility = 'visible';
    xsmallcdefg2line.style.visibility = 'visible';
    xsmallcdefg3circle.style.visibility = 'visible';
    xsmallcdefg3line.style.visibility = 'visible';
    xsmallcdefg4circle.style.visibility = 'visible';
    xsmallcdefg4line.style.visibility = 'visible';
    xsmallcdefg5circle.style.visibility = 'visible';
    xsmallcdefg5line.style.visibility = 'visible';
    xsmallcdefg6line.style.visibility = 'visible';
    xsmallcdefg7line.style.visibility = 'visible';
    xsmallcdefgrect.style.visibility = 'visible';
    xsmallcdefgtext.style.visibility = 'visible';

    xsmallhcircle.style.visibility = 'hidden';
    xsmallhline.style.visibility = 'hidden';
    xsmallicircle.style.visibility = 'hidden';
    xsmalliline.style.visibility = 'hidden';
    xsmalljcircle.style.visibility = 'hidden';
    xsmalljline.style.visibility = 'hidden';
    xsmallhijline.style.visibility = 'hidden';
    xsmallhijrect.style.visibility = 'hidden';
    xsmallhijtext.style.visibility = 'hidden';

    xsmallkcircle.style.visibility = 'hidden';
    xsmallkline.style.visibility = 'hidden';
    xsmallkrect.style.visibility = 'hidden';
    xsmallktext.style.visibility = 'hidden';
  }

  xsmalltogglehij(xsmallacircle: HTMLElement, xsmallaline: HTMLElement, xsmallaline1: HTMLElement, xsmallarect: HTMLElement, xsmallatext: HTMLElement, xsmallbcircle: HTMLElement, xsmallbline: HTMLElement, xsmallbline1: HTMLElement, xsmallbrect: HTMLElement, xsmallbtext: HTMLElement,
    xsmallcdefg1circle: HTMLElement, xsmallcdefg1line: HTMLElement, xsmallcdefg2circle: HTMLElement, xsmallcdefg2line: HTMLElement, xsmallcdefg3circle: HTMLElement, xsmallcdefg3line: HTMLElement, xsmallcdefg4circle: HTMLElement,
    xsmallcdefg4line: HTMLElement, xsmallcdefg5circle: HTMLElement, xsmallcdefg5line: HTMLElement, xsmallcdefg6line: HTMLElement, xsmallcdefg7line: HTMLElement, xsmallcdefgrect: HTMLElement, xsmallcdefgtext: HTMLElement,
    xsmallhcircle: HTMLElement, xsmallhline: HTMLElement, xsmallicircle: HTMLElement, xsmalliline: HTMLElement, xsmalljcircle: HTMLElement, xsmalljline: HTMLElement, xsmallhijline: HTMLElement, xsmallhijrect: HTMLElement, xsmallhijtext: HTMLElement,
    xsmallkcircle: HTMLElement, xsmallkline: HTMLElement, xsmallkrect: HTMLElement, xsmallktext: HTMLElement) {
    xsmallhcircle.style.visibility = 'visible';
    xsmallhline.style.visibility = 'visible';
    xsmallicircle.style.visibility = 'visible';
    xsmalliline.style.visibility = 'visible';
    xsmalljcircle.style.visibility = 'visible';
    xsmalljline.style.visibility = 'visible';
    xsmallhijline.style.visibility = 'visible';
    xsmallhijrect.style.visibility = 'visible';
    xsmallhijtext.style.visibility = 'visible';

    xsmallacircle.style.visibility = 'hidden';
    xsmallaline.style.visibility = 'hidden';
    xsmallaline1.style.visibility = 'hidden';
    xsmallarect.style.visibility = 'hidden';
    xsmallatext.style.visibility = 'hidden';

    xsmallbcircle.style.visibility = 'hidden';
    xsmallbline.style.visibility = 'hidden';
    xsmallbline1.style.visibility = 'hidden';
    xsmallbrect.style.visibility = 'hidden';
    xsmallbtext.style.visibility = 'hidden';

    xsmallcdefg1circle.style.visibility = 'hidden';
    xsmallcdefg1line.style.visibility = 'hidden';
    xsmallcdefg2circle.style.visibility = 'hidden';
    xsmallcdefg2line.style.visibility = 'hidden';
    xsmallcdefg3circle.style.visibility = 'hidden';
    xsmallcdefg3line.style.visibility = 'hidden';
    xsmallcdefg4circle.style.visibility = 'hidden';
    xsmallcdefg4line.style.visibility = 'hidden';
    xsmallcdefg5circle.style.visibility = 'hidden';
    xsmallcdefg5line.style.visibility = 'hidden';
    xsmallcdefg6line.style.visibility = 'hidden';
    xsmallcdefg7line.style.visibility = 'hidden';
    xsmallcdefgrect.style.visibility = 'hidden';
    xsmallcdefgtext.style.visibility = 'hidden';

    xsmallkcircle.style.visibility = 'hidden';
    xsmallkline.style.visibility = 'hidden';
    xsmallkrect.style.visibility = 'hidden';
    xsmallktext.style.visibility = 'hidden';
  }

  xsmalltogglek(xsmallacircle: HTMLElement, xsmallaline: HTMLElement, xsmallaline1: HTMLElement, xsmallarect: HTMLElement, xsmallatext: HTMLElement, xsmallbcircle: HTMLElement, xsmallbline: HTMLElement, xsmallbline1: HTMLElement, xsmallbrect: HTMLElement, xsmallbtext: HTMLElement,
    xsmallcdefg1circle: HTMLElement, xsmallcdefg1line: HTMLElement, xsmallcdefg2circle: HTMLElement, xsmallcdefg2line: HTMLElement, xsmallcdefg3circle: HTMLElement, xsmallcdefg3line: HTMLElement, xsmallcdefg4circle: HTMLElement,
    xsmallcdefg4line: HTMLElement, xsmallcdefg5circle: HTMLElement, xsmallcdefg5line: HTMLElement, xsmallcdefg6line: HTMLElement, xsmallcdefg7line: HTMLElement, xsmallcdefgrect: HTMLElement, xsmallcdefgtext: HTMLElement,
    xsmallhcircle: HTMLElement, xsmallhline: HTMLElement, xsmallicircle: HTMLElement, xsmalliline: HTMLElement, xsmalljcircle: HTMLElement, xsmalljline: HTMLElement, xsmallhijline: HTMLElement, xsmallhijrect: HTMLElement, xsmallhijtext: HTMLElement,
    xsmallkcircle: HTMLElement, xsmallkline: HTMLElement, xsmallkrect: HTMLElement, xsmallktext: HTMLElement) {
    xsmallkcircle.style.visibility = 'visible';
    xsmallkline.style.visibility = 'visible';
    xsmallkrect.style.visibility = 'visible';
    xsmallktext.style.visibility = 'visible';

    xsmallacircle.style.visibility = 'hidden';
    xsmallaline.style.visibility = 'hidden';
    xsmallaline1.style.visibility = 'hidden';
    xsmallarect.style.visibility = 'hidden';
    xsmallatext.style.visibility = 'hidden';

    xsmallbcircle.style.visibility = 'hidden';
    xsmallbline.style.visibility = 'hidden';
    xsmallbline1.style.visibility = 'hidden';
    xsmallbrect.style.visibility = 'hidden';
    xsmallbtext.style.visibility = 'hidden';

    xsmallcdefg1circle.style.visibility = 'hidden';
    xsmallcdefg1line.style.visibility = 'hidden';
    xsmallcdefg2circle.style.visibility = 'hidden';
    xsmallcdefg2line.style.visibility = 'hidden';
    xsmallcdefg3circle.style.visibility = 'hidden';
    xsmallcdefg3line.style.visibility = 'hidden';
    xsmallcdefg4circle.style.visibility = 'hidden';
    xsmallcdefg4line.style.visibility = 'hidden';
    xsmallcdefg5circle.style.visibility = 'hidden';
    xsmallcdefg5line.style.visibility = 'hidden';
    xsmallcdefg6line.style.visibility = 'hidden';
    xsmallcdefg7line.style.visibility = 'hidden';
    xsmallcdefgrect.style.visibility = 'hidden';
    xsmallcdefgtext.style.visibility = 'hidden';

    xsmallhcircle.style.visibility = 'hidden';
    xsmallhline.style.visibility = 'hidden';
    xsmallicircle.style.visibility = 'hidden';
    xsmalliline.style.visibility = 'hidden';
    xsmalljcircle.style.visibility = 'hidden';
    xsmalljline.style.visibility = 'hidden';
    xsmallhijline.style.visibility = 'hidden';
    xsmallhijrect.style.visibility = 'hidden';
    xsmallhijtext.style.visibility = 'hidden';
  }
}