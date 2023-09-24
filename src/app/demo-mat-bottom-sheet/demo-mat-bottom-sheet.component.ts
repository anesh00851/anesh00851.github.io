import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-demo-mat-bottom-sheet',
  templateUrl: './demo-mat-bottom-sheet.component.html',
  styleUrls: ['./demo-mat-bottom-sheet.component.scss']
})
export class DemoMatBottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<DemoMatBottomSheetComponent>) { }

  ngOnInit(): void {

  }

  closebottomsheet(){
    this._bottomSheetRef.dismiss();
  }
}
