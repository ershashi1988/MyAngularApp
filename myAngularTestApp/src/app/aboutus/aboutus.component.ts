import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  id:number | undefined;
  constructor(private route:ActivatedRoute){
  //this.id = route.snapshot.params['id'];
  route.params.subscribe((params)=>{
    this.id = params['id'];
  })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
