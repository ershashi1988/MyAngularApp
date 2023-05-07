import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent  {
   search:string='';
  employee=[]=[
    {
        name:'shashi Bhushan'
        ,Address:'Noida Sec 91'
        ,Contract:'9555654333'
        ,salary:50000
        ,DateOfJoin:new Date()
    },
    {
      name:'Aaryan Singh'
      ,Address:'Faridabad Sec 91'
      ,Contract:'9868080355'
      ,salary:100000
      ,DateOfJoin:new Date()
    },
    {
      name:'Pooja Singh'
      ,Address:'Faridabad Sec 91'
      ,Contract:'8088351940'
      ,salary:150000
      ,DateOfJoin:new Date()
    }
  ]



}
