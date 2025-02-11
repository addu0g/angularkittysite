import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-formfacts',
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './formfacts.component.html',
  styleUrl: './formfacts.component.css'
})
export class FormfactsComponent implements OnInit {

  catsFacts:Cat[]=[];

  newfact = new FormControl('', [
    Validators.required
  ])
  lngth:number=0;

  constructor(private catService: CatService){
  }

  ngOnInit(): void {
    this.getData();
    
  }

  public addFact() {
    if(this.catsFacts.length > 0 && this.newfact.value != ''){
      this.catsFacts.push({fact:this.newfact.value!, length: this.newfact.value!.length ?? 0 });
    }
  }

  private getData():void {
    this.catService.getCatFacts().subscribe(cat => this.catsFacts = cat.data ) ;
  }
}
