import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from '../pipe/pipe.component';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from '../databinding/databinding.component';
import { StructuralComponent } from '../structural/structural.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ParentComponent } from '../nestedcomponent/parent.component';
import { EmployeeComponent } from '../inheritance/employee.component';
import { TemplatedrivenComponent } from '../templatedriven/templatedriven.component';
import { ModelDrivenComponent } from '../model-driven/model-driven.component';

const routes:Routes=[
  { path: '', component: DatabindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'structural', component: StructuralComponent },
  { path: 'aboutus/:id', component: AboutusComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'inheritance', component: EmployeeComponent },
  { path: 'templatedriven', component: TemplatedrivenComponent },
  { path: 'modeldriven', component: ModelDrivenComponent },
  { path: '404 ', component: NotfoundComponent },
  { path: '** ', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
