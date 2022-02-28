import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { ControlsListComponent } from './controls-list/controls-list.component';
import { ControlFormComponent } from './control-form/control-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from "./landing/landing.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    ControlsListComponent,
    ControlFormComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LabelModule,
    InputsModule,
    LayoutModule,
    DropDownsModule,
    ButtonsModule,
    IconsModule,
    RxReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
