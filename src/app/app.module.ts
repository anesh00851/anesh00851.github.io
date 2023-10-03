import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import { DemoManagementHeirarchyComponent } from './demo-management-heirarchy/demo-management-heirarchy.component';
import { DemoObjectDescriptionComponent } from './demo-object-description/demo-object-description.component';
import { DemoCognitiveAnalysisComponent } from './demo-cognitive-analysis/demo-cognitive-analysis.component';
import { DemoPageNotFoundComponentComponent } from './demo-page-not-found-component/demo-page-not-found-component.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { DemoMatBottomSheetComponent } from './demo-mat-bottom-sheet/demo-mat-bottom-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoManagementHeirarchyComponent,
    DemoObjectDescriptionComponent,
    DemoCognitiveAnalysisComponent,
    DemoPageNotFoundComponentComponent,
    DemoMatBottomSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatChipsModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
