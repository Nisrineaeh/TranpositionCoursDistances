import { Component, OnInit } from '@angular/core';
import { PlaneteService } from '../services/planete.service';
import { Planetes } from 'src/models/planete';



@Component({
  selector: 'app-planete',
  templateUrl: './planete.component.html',
  styleUrls: ['./planete.component.css']
})
export class PlaneteComponent implements OnInit{
  planeteToDislpay!: Planetes[];

  constructor(private planeteService: PlaneteService){}

  ngOnInit():void{this.planeteService.getPlanetess().subscribe((planetes)=>{    
    this.planeteToDislpay = planetes;
    console.log(this.planeteToDislpay)})
  }


}
