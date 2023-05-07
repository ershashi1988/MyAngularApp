import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
  myNumber?:number;
  alphabet?:string;
  employee=[]=[
  {
      name:'shashi Bhushan'
      ,Address:'Faridabad Sec 91'
      ,Contract:'9555654333'
  },
  {
    name:'Aaryan Singh'
    ,Address:'Faridabad Sec 91'
    ,Contract:'9868080355'
  },
  {
    name:'Pooja Singh'
    ,Address:'Faridabad Sec 91'
    ,Contract:'8088351940'
  }
]

}
