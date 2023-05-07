import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { StructuralComponent } from './structural/structural.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe,FilterPipe } from './reverse.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    StructuralComponent,
    PipeComponent,
    ReversePipe,
    FilterPipe,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
