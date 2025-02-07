import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatService } from '../services/cat.service';
import { Cat } from '../models/cat';
import { CommonModule } from '@angular/common';
import { StylusPipe } from '../pipes/stylus.pipe';
@Component({
  selector: 'app-grid-info',
  templateUrl: './grid-info.component.html',
  styleUrl: './grid-info.component.css',
  imports:[CommonModule, FormsModule, StylusPipe]
})

export class GridInfoComponent implements OnInit {
  
  constructor(private catService: CatService){}

  public selectedfilter = '';

  catsFacts:Cat[] = [];

  filter = { fact:this.selectedfilter }

  ngOnInit(): void {
    this.getData();
  }

  filteredCats = (value:string):Cat[] => {
    if(value === '') return this.catsFacts;
    return this.catsFacts.filter(cat => cat.fact.includes(value));
  }

  getData():void {
    this.catService.getCatFacts().subscribe(cat => this.catsFacts = cat.data ) ;
  }

}
