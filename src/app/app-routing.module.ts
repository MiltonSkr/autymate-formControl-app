import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlsListComponent } from './controls-list/controls-list.component';
import { LandingComponent } from './landing/landing.component';
import { ControlFormComponent } from './control-form/control-form.component'
const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: 'account', component: LandingComponent },
  { path: 'form', component: ControlFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
