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

  makeAvisible(acircle:HTMLElement,aline:HTMLElement,aline1:HTMLElement,arect:HTMLElement,atext:HTMLElement,bcircle:HTMLElement,bline:HTMLElement,bline1:HTMLElement,brect:HTMLElement,btext:HTMLElement,
    cdefg1circle:HTMLElement,cdefg1line:HTMLElement,cdefg2circle:HTMLElement,cdefg2line:HTMLElement,cdefg3circle:HTMLElement,cdefg3line:HTMLElement,cdefg4circle:HTMLElement,
    cdefg4line:HTMLElement,cdefg5circle:HTMLElement,cdefg5line:HTMLElement,cdefg6line:HTMLElement,cdefg7line:HTMLElement,cdefgrect:HTMLElement,cdefgtext:HTMLElement,
    hcircle:HTMLElement,hline:HTMLElement,icircle:HTMLElement,iline:HTMLElement,jcircle:HTMLElement,jline:HTMLElement,hijline:HTMLElement,hijrect:HTMLElement,hijtext:HTMLElement,
    kcircle:HTMLElement,kline:HTMLElement,krect:HTMLElement,ktext:HTMLElement) {
    acircle.style.visibility='visible';
    aline.style.visibility='visible';
    aline1.style.visibility='visible';
    arect.style.visibility='visible';
    atext.style.visibility='visible';

    bcircle.style.visibility='hidden';
    bline.style.visibility='hidden';
    bline1.style.visibility='hidden';
    brect.style.visibility='hidden';
    btext.style.visibility='hidden';

    cdefg1circle.style.visibility='hidden';
    cdefg1line.style.visibility='hidden';
    cdefg2circle.style.visibility='hidden';
    cdefg2line.style.visibility='hidden';
    cdefg3circle.style.visibility='hidden';
    cdefg3line.style.visibility='hidden';
    cdefg4circle.style.visibility='hidden';
    cdefg4line.style.visibility='hidden';
    cdefg5circle.style.visibility='hidden';
    cdefg5line.style.visibility='hidden';
    cdefg6line.style.visibility='hidden';
    cdefg7line.style.visibility='hidden';
    cdefgrect.style.visibility='hidden';
    cdefgtext.style.visibility='hidden';

    hcircle.style.visibility='hidden';
      hline.style.visibility='hidden';
      icircle.style.visibility='hidden';
      iline.style.visibility='hidden';
      jcircle.style.visibility='hidden';
      jline.style.visibility='hidden';
      hijline.style.visibility='hidden';
      hijrect.style.visibility='hidden';
      hijtext.style.visibility='hidden';

      kcircle.style.visibility='hidden';
      kline.style.visibility='hidden';
      krect.style.visibility='hidden';
      ktext.style.visibility='hidden';
  }

  makeBvisible(acircle:HTMLElement,aline:HTMLElement,aline1:HTMLElement,arect:HTMLElement,atext:HTMLElement,bcircle:HTMLElement,bline:HTMLElement,bline1:HTMLElement,brect:HTMLElement,btext:HTMLElement,
    cdefg1circle:HTMLElement,cdefg1line:HTMLElement,cdefg2circle:HTMLElement,cdefg2line:HTMLElement,cdefg3circle:HTMLElement,cdefg3line:HTMLElement,cdefg4circle:HTMLElement,
    cdefg4line:HTMLElement,cdefg5circle:HTMLElement,cdefg5line:HTMLElement,cdefg6line:HTMLElement,cdefg7line:HTMLElement,cdefgrect:HTMLElement,cdefgtext:HTMLElement,
    hcircle:HTMLElement,hline:HTMLElement,icircle:HTMLElement,iline:HTMLElement,jcircle:HTMLElement,jline:HTMLElement,hijline:HTMLElement,hijrect:HTMLElement,hijtext:HTMLElement,
    kcircle:HTMLElement,kline:HTMLElement,krect:HTMLElement,ktext:HTMLElement){
    bcircle.style.visibility='visible';
    bline.style.visibility='visible';
    bline1.style.visibility='visible';
    brect.style.visibility='visible';
    btext.style.visibility='visible';

    acircle.style.visibility='hidden';
    aline.style.visibility='hidden';
    aline1.style.visibility='hidden';
    arect.style.visibility='hidden';
    atext.style.visibility='hidden';

    cdefg1circle.style.visibility='hidden';
      cdefg1line.style.visibility='hidden';
      cdefg2circle.style.visibility='hidden';
      cdefg2line.style.visibility='hidden';
      cdefg3circle.style.visibility='hidden';
      cdefg3line.style.visibility='hidden';
      cdefg4circle.style.visibility='hidden';
      cdefg4line.style.visibility='hidden';
      cdefg5circle.style.visibility='hidden';
      cdefg5line.style.visibility='hidden';
      cdefg6line.style.visibility='hidden';
      cdefg7line.style.visibility='hidden';
      cdefgrect.style.visibility='hidden';
      cdefgtext.style.visibility='hidden';

      hcircle.style.visibility='hidden';
      hline.style.visibility='hidden';
      icircle.style.visibility='hidden';
      iline.style.visibility='hidden';
      jcircle.style.visibility='hidden';
      jline.style.visibility='hidden';
      hijline.style.visibility='hidden';
      hijrect.style.visibility='hidden';
      hijtext.style.visibility='hidden';

      kcircle.style.visibility='hidden';
      kline.style.visibility='hidden';
      krect.style.visibility='hidden';
      ktext.style.visibility='hidden';
  }

  togglecdefg(acircle:HTMLElement,aline:HTMLElement,aline1:HTMLElement,arect:HTMLElement,atext:HTMLElement,bcircle:HTMLElement,bline:HTMLElement,bline1:HTMLElement,brect:HTMLElement,btext:HTMLElement,
    cdefg1circle:HTMLElement,cdefg1line:HTMLElement,cdefg2circle:HTMLElement,cdefg2line:HTMLElement,cdefg3circle:HTMLElement,cdefg3line:HTMLElement,cdefg4circle:HTMLElement,
    cdefg4line:HTMLElement,cdefg5circle:HTMLElement,cdefg5line:HTMLElement,cdefg6line:HTMLElement,cdefg7line:HTMLElement,cdefgrect:HTMLElement,cdefgtext:HTMLElement,
    hcircle:HTMLElement,hline:HTMLElement,icircle:HTMLElement,iline:HTMLElement,jcircle:HTMLElement,jline:HTMLElement,hijline:HTMLElement,hijrect:HTMLElement,hijtext:HTMLElement,
    kcircle:HTMLElement,kline:HTMLElement,krect:HTMLElement,ktext:HTMLElement){
      acircle.style.visibility='hidden';
      aline.style.visibility='hidden';
      aline1.style.visibility='hidden';
      arect.style.visibility='hidden';
      atext.style.visibility='hidden';
  
      bcircle.style.visibility='hidden';
      bline.style.visibility='hidden';
      bline1.style.visibility='hidden';
      brect.style.visibility='hidden';
      btext.style.visibility='hidden';

      cdefg1circle.style.visibility='visible';
      cdefg1line.style.visibility='visible';
      cdefg2circle.style.visibility='visible';
      cdefg2line.style.visibility='visible';
      cdefg3circle.style.visibility='visible';
      cdefg3line.style.visibility='visible';
      cdefg4circle.style.visibility='visible';
      cdefg4line.style.visibility='visible';
      cdefg5circle.style.visibility='visible';
      cdefg5line.style.visibility='visible';
      cdefg6line.style.visibility='visible';
      cdefg7line.style.visibility='visible';
      cdefgrect.style.visibility='visible';
      cdefgtext.style.visibility='visible';

      hcircle.style.visibility='hidden';
      hline.style.visibility='hidden';
      icircle.style.visibility='hidden';
      iline.style.visibility='hidden';
      jcircle.style.visibility='hidden';
      jline.style.visibility='hidden';
      hijline.style.visibility='hidden';
      hijrect.style.visibility='hidden';
      hijtext.style.visibility='hidden';

      kcircle.style.visibility='hidden';
      kline.style.visibility='hidden';
      krect.style.visibility='hidden';
      ktext.style.visibility='hidden';
    }

    togglehij(acircle:HTMLElement,aline:HTMLElement,aline1:HTMLElement,arect:HTMLElement,atext:HTMLElement,bcircle:HTMLElement,bline:HTMLElement,bline1:HTMLElement,brect:HTMLElement,btext:HTMLElement,
      cdefg1circle:HTMLElement,cdefg1line:HTMLElement,cdefg2circle:HTMLElement,cdefg2line:HTMLElement,cdefg3circle:HTMLElement,cdefg3line:HTMLElement,cdefg4circle:HTMLElement,
      cdefg4line:HTMLElement,cdefg5circle:HTMLElement,cdefg5line:HTMLElement,cdefg6line:HTMLElement,cdefg7line:HTMLElement,cdefgrect:HTMLElement,cdefgtext:HTMLElement,
      hcircle:HTMLElement,hline:HTMLElement,icircle:HTMLElement,iline:HTMLElement,jcircle:HTMLElement,jline:HTMLElement,hijline:HTMLElement,hijrect:HTMLElement,hijtext:HTMLElement,
      kcircle:HTMLElement,kline:HTMLElement,krect:HTMLElement,ktext:HTMLElement){
      hcircle.style.visibility='visible';
      hline.style.visibility='visible';
      icircle.style.visibility='visible';
      iline.style.visibility='visible';
      jcircle.style.visibility='visible';
      jline.style.visibility='visible';
      hijline.style.visibility='visible';
      hijrect.style.visibility='visible';
      hijtext.style.visibility='visible';

      acircle.style.visibility='hidden';
    aline.style.visibility='hidden';
    aline1.style.visibility='hidden';
    arect.style.visibility='hidden';
    atext.style.visibility='hidden';

    bcircle.style.visibility='hidden';
    bline.style.visibility='hidden';
    bline1.style.visibility='hidden';
    brect.style.visibility='hidden';
    btext.style.visibility='hidden';

    cdefg1circle.style.visibility='hidden';
    cdefg1line.style.visibility='hidden';
    cdefg2circle.style.visibility='hidden';
    cdefg2line.style.visibility='hidden';
    cdefg3circle.style.visibility='hidden';
    cdefg3line.style.visibility='hidden';
    cdefg4circle.style.visibility='hidden';
    cdefg4line.style.visibility='hidden';
    cdefg5circle.style.visibility='hidden';
    cdefg5line.style.visibility='hidden';
    cdefg6line.style.visibility='hidden';
    cdefg7line.style.visibility='hidden';
    cdefgrect.style.visibility='hidden';
    cdefgtext.style.visibility='hidden';

    kcircle.style.visibility='hidden';
    kline.style.visibility='hidden';
    krect.style.visibility='hidden';
    ktext.style.visibility='hidden';
    }

    togglek(acircle:HTMLElement,aline:HTMLElement,aline1:HTMLElement,arect:HTMLElement,atext:HTMLElement,bcircle:HTMLElement,bline:HTMLElement,bline1:HTMLElement,brect:HTMLElement,btext:HTMLElement,
      cdefg1circle:HTMLElement,cdefg1line:HTMLElement,cdefg2circle:HTMLElement,cdefg2line:HTMLElement,cdefg3circle:HTMLElement,cdefg3line:HTMLElement,cdefg4circle:HTMLElement,
      cdefg4line:HTMLElement,cdefg5circle:HTMLElement,cdefg5line:HTMLElement,cdefg6line:HTMLElement,cdefg7line:HTMLElement,cdefgrect:HTMLElement,cdefgtext:HTMLElement,
      hcircle:HTMLElement,hline:HTMLElement,icircle:HTMLElement,iline:HTMLElement,jcircle:HTMLElement,jline:HTMLElement,hijline:HTMLElement,hijrect:HTMLElement,hijtext:HTMLElement,
      kcircle:HTMLElement,kline:HTMLElement,krect:HTMLElement,ktext:HTMLElement){
      kcircle.style.visibility='visible';
      kline.style.visibility='visible';
      krect.style.visibility='visible';
      ktext.style.visibility='visible';

      acircle.style.visibility='hidden';
    aline.style.visibility='hidden';
    aline1.style.visibility='hidden';
    arect.style.visibility='hidden';
    atext.style.visibility='hidden';

    bcircle.style.visibility='hidden';
    bline.style.visibility='hidden';
    bline1.style.visibility='hidden';
    brect.style.visibility='hidden';
    btext.style.visibility='hidden';

    cdefg1circle.style.visibility='hidden';
    cdefg1line.style.visibility='hidden';
    cdefg2circle.style.visibility='hidden';
    cdefg2line.style.visibility='hidden';
    cdefg3circle.style.visibility='hidden';
    cdefg3line.style.visibility='hidden';
    cdefg4circle.style.visibility='hidden';
    cdefg4line.style.visibility='hidden';
    cdefg5circle.style.visibility='hidden';
    cdefg5line.style.visibility='hidden';
    cdefg6line.style.visibility='hidden';
    cdefg7line.style.visibility='hidden';
    cdefgrect.style.visibility='hidden';
    cdefgtext.style.visibility='hidden';

    hcircle.style.visibility='hidden';
      hline.style.visibility='hidden';
      icircle.style.visibility='hidden';
      iline.style.visibility='hidden';
      jcircle.style.visibility='hidden';
      jline.style.visibility='hidden';
      hijline.style.visibility='hidden';
      hijrect.style.visibility='hidden';
      hijtext.style.visibility='hidden';
    }

    showall(acircle:HTMLElement,aline:HTMLElement,aline1:HTMLElement,arect:HTMLElement,atext:HTMLElement,bcircle:HTMLElement,bline:HTMLElement,bline1:HTMLElement,brect:HTMLElement,btext:HTMLElement,
      cdefg1circle:HTMLElement,cdefg1line:HTMLElement,cdefg2circle:HTMLElement,cdefg2line:HTMLElement,cdefg3circle:HTMLElement,cdefg3line:HTMLElement,cdefg4circle:HTMLElement,
      cdefg4line:HTMLElement,cdefg5circle:HTMLElement,cdefg5line:HTMLElement,cdefg6line:HTMLElement,cdefg7line:HTMLElement,cdefgrect:HTMLElement,cdefgtext:HTMLElement,
      hcircle:HTMLElement,hline:HTMLElement,icircle:HTMLElement,iline:HTMLElement,jcircle:HTMLElement,jline:HTMLElement,hijline:HTMLElement,hijrect:HTMLElement,hijtext:HTMLElement,
      kcircle:HTMLElement,kline:HTMLElement,krect:HTMLElement,ktext:HTMLElement){
        kcircle.style.visibility='visible';
        kline.style.visibility='visible';
        krect.style.visibility='visible';
        ktext.style.visibility='visible';
  
        acircle.style.visibility='visible';
      aline.style.visibility='visible';
      aline1.style.visibility='visible';
      arect.style.visibility='visible';
      atext.style.visibility='visible';
  
      bcircle.style.visibility='visible';
      bline.style.visibility='visible';
      bline1.style.visibility='visible';
      brect.style.visibility='visible';
      btext.style.visibility='visible';
  
      cdefg1circle.style.visibility='visible';
      cdefg1line.style.visibility='visible';
      cdefg2circle.style.visibility='visible';
      cdefg2line.style.visibility='visible';
      cdefg3circle.style.visibility='visible';
      cdefg3line.style.visibility='visible';
      cdefg4circle.style.visibility='visible';
      cdefg4line.style.visibility='visible';
      cdefg5circle.style.visibility='visible';
      cdefg5line.style.visibility='visible';
      cdefg6line.style.visibility='visible';
      cdefg7line.style.visibility='visible';
      cdefgrect.style.visibility='visible';
      cdefgtext.style.visibility='visible';
  
      hcircle.style.visibility='visible';
        hline.style.visibility='visible';
        icircle.style.visibility='visible';
        iline.style.visibility='visible';
        jcircle.style.visibility='visible';
        jline.style.visibility='visible';
        hijline.style.visibility='visible';
        hijrect.style.visibility='visible';
        hijtext.style.visibility='visible';
      }

      closemodal(modalcontent:HTMLElement){
        console.log('1');
        modalcontent.style.display = "none";
      }

}