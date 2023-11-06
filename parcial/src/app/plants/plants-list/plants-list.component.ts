import { Component } from '@angular/core';
import { Plants } from '../plants.model';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent {
  plants: Array<Plants> = [];
  totalInternal = 0;
  totalExternal = 0;

  constructor(private plantsService: PlantsService) { }

  getPlants(): void {
    this.plantsService.getPlants().subscribe((results) => {
      if (results) {
        this.totalInternal = results.filter(x => { return x.tipo === "Interior" }).length;
        this.totalExternal = results.filter(x => { return x.tipo === "Exterior" }).length;
        this.plants = results;
      }
    });
  }

  ngOnInit() {
    this.getPlants();
  }
}
