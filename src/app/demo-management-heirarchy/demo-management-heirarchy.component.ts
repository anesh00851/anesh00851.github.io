import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-demo-management-heirarchy',
  templateUrl: './demo-management-heirarchy.component.html',
  styleUrls: ['./demo-management-heirarchy.component.scss']
})
export class DemoManagementHeirarchyComponent implements OnInit {

  @ViewChild('myModal', { static: false }) myModal!: ElementRef;

  @ViewChild('ceo', { static: false }) ceo!: ElementRef;

  @ViewChild('saleshead', { static: false }) saleshead!: ElementRef;
  @ViewChild('productionhead', { static: false }) productionhead!: ElementRef;
  @ViewChild('markettinghead', { static: false }) markettinghead!: ElementRef;

  @ViewChild('salesmanager', { static: false }) salesmanager!: ElementRef;
  @ViewChild('productionmanager', { static: false }) productionmanager!: ElementRef;
  @ViewChild('marketingmanager', { static: false }) marketingmanager!: ElementRef;

  @ViewChild('salesl1', { static: false }) salesl1!: ElementRef;
  @ViewChild('productionl1', { static: false }) productionl1!: ElementRef;
  @ViewChild('marketingl1', { static: false }) marketingl1!: ElementRef;

  @ViewChild('salesl2', { static: false }) salesl2!: ElementRef;
  @ViewChild('productionl2', { static: false }) productionl2!: ElementRef;
  @ViewChild('marketingl2', { static: false }) marketingl2!: ElementRef;

  @ViewChild('matchipceo', { static: false }) matchipceo!: ElementRef;

  @ViewChild('matchipsaleshead', { static: false }) matchipsaleshead!: ElementRef;
  @ViewChild('matchipproductionhead', { static: false }) matchipproductionhead!: ElementRef;
  @ViewChild('matchipmarkettinghead', { static: false }) matchipmarkettinghead!: ElementRef;

  @ViewChild('matchipsalesmanager', { static: false }) matchipsalesmanager!: ElementRef;
  @ViewChild('matchipproductionmanager', { static: false }) matchipproductionmanager!: ElementRef;
  @ViewChild('matchipmarkettingmanager', { static: false }) matchipmarkettingmanager!: ElementRef;

  @ViewChild('matchipsalesl1', { static: false }) matchipsalesl1!: ElementRef;
  @ViewChild('matchipSalesl2', { static: false }) matchipSalesl2!: ElementRef;
  
  @ViewChild('matchipproductionl1', { static: false }) matchipproductionl1!: ElementRef;
  @ViewChild('matchipproductionl2', { static: false }) matchipproductionl2!: ElementRef;

  @ViewChild('matchipmarkettingl1', { static: false }) matchipmarkettingl1!: ElementRef;
  @ViewChild('matchipmarkettingl2', { static: false }) matchipmarkettingl2!: ElementRef;

  ceodownsidex1:Number=0;
  ceodownsidey1:Number=0;
  salesheadupsidex1:Number=0;
  salesheadupsidey1:Number=0;
  productionheadupsidex1:Number=0;
  productionheadupsidey1:Number=0;
  markettingheadupsidex1:Number=0;
  markettingheadupsidey1:Number=0;
  salesmanagerupsidex1:Number=0;
  salesmanagerupsidey1:Number=0;
  salesheaddownsidex1:Number=0;
  salesheaddownsidey1:Number=0;
  productionheaddownsidex1:Number=0;
  productionheaddownsidey1:Number=0;
  productionmanagerupsidex1:Number=0;
  productionmanagerupsidey1:Number=0;
  markettingheaddownsidex1:Number=0;
  markettingheaddownsidey1:Number=0;
  markettingmanagerupsidex1:Number=0;
  markettingmanagerupsidey1:Number=0;
  salesmanagerdownsidex1:Number=0;
  salesmanagerdownsidey1:Number=0;
  salesl1upsidex1:Number=0;
  salesl1upsidey1:Number=0;
  productionmanagerdownsidex1:Number=0;
  productionmanagerdownsidey1:Number=0;
  productionl1upsidex1:Number=0;
  productionl1upsidey1:Number=0;
  markettingmanagerdownsidex1:Number=0;
  markettingmanagerdownsidey1:Number=0;
  markettingl1upsidex1:Number=0;
  markettingl1upsidey1:Number=0;
  salesl1downsidex1:Number=0;
  salesl1downsidey1:Number=0;
  salesl2upsidex1:Number=0;
  salesl2upsidey1:Number=0;
  productionl1downsidex1:Number=0;
  productionl1downsidey1:Number=0;
  productionl2upsidex1:Number=0;
  productionl2upsidey1:Number=0;
  markettingl1downsidex1:Number=0;
  markettingl1downsidey1:Number=0;
  markettingl2upsidex1:Number=0;
  markettingl2upsidey1:Number=0;

  viewinitialised:boolean=false;

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
    this.breakpointobserver(breakpointObserver);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngAfterViewInit(){
    if(this.currentScreenSize != "XSmall"){
      console.log('124');
      this.getRectcoordinates();
    }
    else if(this.currentScreenSize == "XSmall"){
      console.log('128');
      this.getmatchipRectcoordinates();
    }
  }

  breakpointobserver(breakpointObserver: BreakpointObserver){
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

  openmodal(){
    this.myModal.nativeElement.style.display = "flex";
  }

  Closemodal(){
    this.myModal.nativeElement.style.display = "none";
  }

  hidemodal(){
    this.myModal.nativeElement.style.display = "none";
  }

  stoppropagation(event:any){
    event.stopPropagation();
  }

  getRectcoordinates(){
    //offsetTop;
    //offsetLeft;
    //offsetHeight;
    //offsetWidth;

    this.ceodownsidex1 = (this.ceo.nativeElement.offsetLeft + (this.ceo.nativeElement.offsetWidth/2));
    this.ceodownsidey1= (this.ceo.nativeElement.offsetTop + this.ceo.nativeElement.offsetHeight);

    this.salesheadupsidex1 = (this.saleshead.nativeElement.offsetLeft + (this.saleshead.nativeElement.offsetWidth/2));
    this.salesheadupsidey1 = (this.saleshead.nativeElement.offsetTop);
    this.productionheadupsidex1 = (this.productionhead.nativeElement.offsetLeft + (this.productionhead.nativeElement.offsetWidth/2));
    this.productionheadupsidey1 = (this.productionhead.nativeElement.offsetTop);
    this.markettingheadupsidex1 = (this.markettinghead.nativeElement.offsetLeft + (this.markettinghead.nativeElement.offsetWidth/2));
    this.markettingheadupsidey1 = (this.markettinghead.nativeElement.offsetTop);

    this.salesheaddownsidex1 = (this.saleshead.nativeElement.offsetLeft + (this.saleshead.nativeElement.offsetWidth/2));
    this.salesheaddownsidey1 = (this.saleshead.nativeElement.offsetTop + this.saleshead.nativeElement.offsetHeight);
    this.salesmanagerupsidex1 = (this.salesmanager.nativeElement.offsetLeft + (this.salesmanager.nativeElement.offsetWidth/2));
    this.salesmanagerupsidey1 = (this.salesmanager.nativeElement.offsetTop);

    this.productionheaddownsidex1 = (this.productionhead.nativeElement.offsetLeft + (this.productionhead.nativeElement.offsetWidth/2));
    this.productionheaddownsidey1 = (this.productionhead.nativeElement.offsetTop + this.productionhead.nativeElement.offsetHeight);
    this.productionmanagerupsidex1 = (this.productionmanager.nativeElement.offsetLeft + (this.productionmanager.nativeElement.offsetWidth/2));
    this.productionmanagerupsidey1 = (this.productionmanager.nativeElement.offsetTop);

    this.markettingheaddownsidex1 = (this.markettinghead.nativeElement.offsetLeft + (this.markettinghead.nativeElement.offsetWidth/2));
    this.markettingheaddownsidey1 = (this.markettinghead.nativeElement.offsetTop + this.markettinghead.nativeElement.offsetHeight);
    this.markettingmanagerupsidex1 = (this.marketingmanager.nativeElement.offsetLeft + (this.marketingmanager.nativeElement.offsetWidth/2));
    this.markettingmanagerupsidey1 = (this.marketingmanager.nativeElement.offsetTop);

    this.salesmanagerdownsidex1 = (this.salesmanager.nativeElement.offsetLeft + (this.salesmanager.nativeElement.offsetWidth/2));
    this.salesmanagerdownsidey1 = (this.salesmanager.nativeElement.offsetTop + this.salesmanager.nativeElement.offsetHeight);
    this.salesl1upsidex1 = (this.salesl1.nativeElement.offsetLeft + (this.salesl1.nativeElement.offsetWidth/2));
    this.salesl1upsidey1 = (this.salesl1.nativeElement.offsetTop);

    this.productionmanagerdownsidex1 = (this.productionmanager.nativeElement.offsetLeft + (this.productionmanager.nativeElement.offsetWidth/2));
    this.productionmanagerdownsidey1 = (this.productionmanager.nativeElement.offsetTop + this.productionmanager.nativeElement.offsetHeight);
    this.productionl1upsidex1 = (this.productionl1.nativeElement.offsetLeft + (this.productionl1.nativeElement.offsetWidth/2));
    this.productionl1upsidey1 = (this.productionl1.nativeElement.offsetTop);

    this.markettingmanagerdownsidex1 = (this.marketingmanager.nativeElement.offsetLeft + (this.marketingmanager.nativeElement.offsetWidth/2));
    this.markettingmanagerdownsidey1 = (this.marketingmanager.nativeElement.offsetTop + this.marketingmanager.nativeElement.offsetHeight);
    this.markettingl1upsidex1 = (this.marketingl1.nativeElement.offsetLeft + (this.marketingl1.nativeElement.offsetWidth/2));
    this.markettingl1upsidey1 = (this.marketingl1.nativeElement.offsetTop);

    this.salesl1downsidex1 = (this.salesl1.nativeElement.offsetLeft + (this.salesl1.nativeElement.offsetWidth/2));
    this.salesl1downsidey1 = (this.salesl1.nativeElement.offsetTop + this.salesl1.nativeElement.offsetHeight);
    this.salesl2upsidex1 = (this.salesl2.nativeElement.offsetLeft + (this.salesl2.nativeElement.offsetWidth/2));
    this.salesl2upsidey1 = (this.salesl2.nativeElement.offsetTop);

    this.productionl1downsidex1 = (this.productionl1.nativeElement.offsetLeft + (this.productionl1.nativeElement.offsetWidth/2));
    this.productionl1downsidey1 = (this.productionl1.nativeElement.offsetTop + this.productionl1.nativeElement.offsetHeight);
    this.productionl2upsidex1 = (this.productionl2.nativeElement.offsetLeft + (this.productionl2.nativeElement.offsetWidth/2));
    this.productionl2upsidey1 = (this.productionl2.nativeElement.offsetTop);

    this.markettingl1downsidex1 = (this.marketingl1.nativeElement.offsetLeft + (this.marketingl1.nativeElement.offsetWidth/2));
    this.markettingl1downsidey1 = (this.marketingl1.nativeElement.offsetTop + this.marketingl1.nativeElement.offsetHeight);
    this.markettingl2upsidex1 = (this.marketingl2.nativeElement.offsetLeft + (this.marketingl2.nativeElement.offsetWidth/2));
    this.markettingl2upsidey1 = (this.marketingl2.nativeElement.offsetTop);
  }

  getmatchipRectcoordinates(){
    this.ceodownsidex1 = (this.matchipceo.nativeElement.offsetLeft + (this.matchipceo.nativeElement.offsetWidth/2));
    this.ceodownsidey1= (this.matchipceo.nativeElement.offsetTop + this.matchipceo.nativeElement.offsetHeight);

    this.salesheadupsidex1 = (this.matchipsaleshead.nativeElement.offsetLeft + (this.matchipsaleshead.nativeElement.offsetWidth/2));
    this.salesheadupsidey1 = (this.matchipsaleshead.nativeElement.offsetTop);
    this.productionheadupsidex1 = (this.matchipproductionhead.nativeElement.offsetLeft + (this.matchipproductionhead.nativeElement.offsetWidth/2));
    this.productionheadupsidey1 = (this.matchipproductionhead.nativeElement.offsetTop);
    this.markettingheadupsidex1 = (this.matchipmarkettinghead.nativeElement.offsetLeft + (this.matchipmarkettinghead.nativeElement.offsetWidth/2));
    this.markettingheadupsidey1 = (this.matchipmarkettinghead.nativeElement.offsetTop);

    this.salesheaddownsidex1 = (this.matchipsaleshead.nativeElement.offsetLeft + (this.matchipsaleshead.nativeElement.offsetWidth/2));
    this.salesheaddownsidey1 = (this.matchipsaleshead.nativeElement.offsetTop + this.matchipsaleshead.nativeElement.offsetHeight);
    this.salesmanagerupsidex1 = (this.matchipsalesmanager.nativeElement.offsetLeft + (this.matchipsalesmanager.nativeElement.offsetWidth/2));
    this.salesmanagerupsidey1 = (this.matchipsalesmanager.nativeElement.offsetTop);

    this.productionheaddownsidex1 = (this.matchipproductionhead.nativeElement.offsetLeft + (this.matchipproductionhead.nativeElement.offsetWidth/2));
    this.productionheaddownsidey1 = (this.matchipproductionhead.nativeElement.offsetTop + this.matchipproductionhead.nativeElement.offsetHeight);
    this.productionmanagerupsidex1 = (this.matchipproductionmanager.nativeElement.offsetLeft + (this.matchipproductionmanager.nativeElement.offsetWidth/2));
    this.productionmanagerupsidey1 = (this.matchipproductionmanager.nativeElement.offsetTop);

    this.markettingheaddownsidex1 = (this.matchipmarkettinghead.nativeElement.offsetLeft + (this.matchipmarkettinghead.nativeElement.offsetWidth/2));
    this.markettingheaddownsidey1 = (this.matchipmarkettinghead.nativeElement.offsetTop + this.matchipmarkettinghead.nativeElement.offsetHeight);
    this.markettingmanagerupsidex1 = (this.matchipmarkettingmanager.nativeElement.offsetLeft + (this.matchipmarkettingmanager.nativeElement.offsetWidth/2));
    this.markettingmanagerupsidey1 = (this.matchipmarkettingmanager.nativeElement.offsetTop);

    this.salesmanagerdownsidex1 = (this.matchipsalesmanager.nativeElement.offsetLeft + (this.matchipsalesmanager.nativeElement.offsetWidth/2));
    this.salesmanagerdownsidey1 = (this.matchipsalesmanager.nativeElement.offsetTop + this.matchipsalesmanager.nativeElement.offsetHeight);
    this.salesl1upsidex1 = (this.matchipsalesl1.nativeElement.offsetLeft + (this.matchipsalesl1.nativeElement.offsetWidth/2));
    this.salesl1upsidey1 = (this.matchipsalesl1.nativeElement.offsetTop);

    this.productionmanagerdownsidex1 = (this.matchipproductionmanager.nativeElement.offsetLeft + (this.matchipproductionmanager.nativeElement.offsetWidth/2));
    this.productionmanagerdownsidey1 = (this.matchipproductionmanager.nativeElement.offsetTop + this.matchipproductionmanager.nativeElement.offsetHeight);
    this.productionl1upsidex1 = (this.matchipproductionl1.nativeElement.offsetLeft + (this.matchipproductionl1.nativeElement.offsetWidth/2));
    this.productionl1upsidey1 = (this.matchipproductionl1.nativeElement.offsetTop);

    this.markettingmanagerdownsidex1 = (this.matchipmarkettingmanager.nativeElement.offsetLeft + (this.matchipmarkettingmanager.nativeElement.offsetWidth/2));
    this.markettingmanagerdownsidey1 = (this.matchipmarkettingmanager.nativeElement.offsetTop + this.matchipmarkettingmanager.nativeElement.offsetHeight);
    this.markettingl1upsidex1 = (this.matchipmarkettingl1.nativeElement.offsetLeft + (this.matchipmarkettingl1.nativeElement.offsetWidth/2));
    this.markettingl1upsidey1 = (this.matchipmarkettingl1.nativeElement.offsetTop);

    this.salesl1downsidex1 = (this.matchipsalesl1.nativeElement.offsetLeft + (this.matchipsalesl1.nativeElement.offsetWidth/2));
    this.salesl1downsidey1 = (this.matchipsalesl1.nativeElement.offsetTop + this.matchipsalesl1.nativeElement.offsetHeight);
    this.salesl2upsidex1 = (this.matchipSalesl2.nativeElement.offsetLeft + (this.matchipSalesl2.nativeElement.offsetWidth/2));
    this.salesl2upsidey1 = (this.matchipSalesl2.nativeElement.offsetTop);

    this.productionl1downsidex1 = (this.matchipproductionl1.nativeElement.offsetLeft + (this.matchipproductionl1.nativeElement.offsetWidth/2));
    this.productionl1downsidey1 = (this.matchipproductionl1.nativeElement.offsetTop + this.matchipproductionl1.nativeElement.offsetHeight);
    this.productionl2upsidex1 = (this.matchipproductionl2.nativeElement.offsetLeft + (this.matchipproductionl2.nativeElement.offsetWidth/2));
    this.productionl2upsidey1 = (this.matchipproductionl2.nativeElement.offsetTop);

    this.markettingl1downsidex1 = (this.matchipmarkettingl1.nativeElement.offsetLeft + (this.matchipmarkettingl1.nativeElement.offsetWidth/2));
    this.markettingl1downsidey1 = (this.matchipmarkettingl1.nativeElement.offsetTop + this.matchipmarkettingl1.nativeElement.offsetHeight);
    this.markettingl2upsidex1 = (this.matchipmarkettingl2.nativeElement.offsetLeft + (this.matchipmarkettingl2.nativeElement.offsetWidth/2));
    this.markettingl2upsidey1 = (this.matchipmarkettingl2.nativeElement.offsetTop);
  }

}
