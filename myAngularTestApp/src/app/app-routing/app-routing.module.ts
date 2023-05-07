import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from '../pipe/pipe.component';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from '../databinding/databinding.component';
import { StructuralComponent } from '../structural/structural.component';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes:Routes=[
  { path: '', component: DatabindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'structural', component: StructuralComponent },
  { path: '404 ', component: NotfoundComponent },
  { path: '** ', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
