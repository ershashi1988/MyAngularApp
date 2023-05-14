import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StructuralComponent } from './structural/structural.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe,FilterPipe } from './reverse.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ParentComponent } from './nestedcomponent/parent.component';
import { ChildComponent } from './nestedcomponent/child.component';
import { PersonComponent } from './inheritance/person.component';
import { EmployeeComponent } from './inheritance/employee.component';
import { MyCustomDirDirective } from './my-custom-dir.directive';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    StructuralComponent,
    PipeComponent,
    ReversePipe,
    FilterPipe,
    NotfoundComponent,
    AboutusComponent,
    ParentComponent,
    ChildComponent,
    PersonComponent,
    EmployeeComponent,
    MyCustomDirDirective,
    TemplatedrivenComponent,
    ModelDrivenComponent,
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
