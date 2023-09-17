import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCognitiveAnalysisComponent } from './demo-cognitive-analysis/demo-cognitive-analysis.component';
import { DemoGlimpseOfTomorrowComponent } from './demo-glimpse-of-tomorrow/demo-glimpse-of-tomorrow.component';
import { DemoManagementHeirarchyComponent } from './demo-management-heirarchy/demo-management-heirarchy.component';
import { DemoObjectDescriptionComponent } from './demo-object-description/demo-object-description.component';
import { DemoPageNotFoundComponentComponent } from './demo-page-not-found-component/demo-page-not-found-component.component';

const routes: Routes = [
  { path: 'managementheirarchy',component:DemoManagementHeirarchyComponent},
  { path: 'objectdescription',component:DemoObjectDescriptionComponent},
  { path: 'cognitiveanalysis',component:DemoCognitiveAnalysisComponent},
  { path: 'glimpseoftomorrow',component:DemoGlimpseOfTomorrowComponent},
  { path: '', redirectTo: 'managementheirarchy', pathMatch: 'full' },
  { path: '**', component: DemoPageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
