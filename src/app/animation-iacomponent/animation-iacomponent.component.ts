import { Answers } from './../models/answers';
import { Component } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CatService } from '../services/cat.service';
import { Cat } from '../models/cat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animation-iacomponent',
  imports: [CommonModule],
  templateUrl: './animation-iacomponent.component.html',
  styleUrl: './animation-iacomponent.component.css'
})

export class AnimationIAComponentComponent {
  public selectedfilter = '';
  catsFacts:Cat[] = [];
  questionResponses=[{question:'',answer:''}];
  filter = { fact:this.selectedfilter }

  ngOnInit(): void {
    this.getData();
  }

  filteredCats = (value:string):Cat[] => {
    if(value === '') return this.catsFacts;
    return this.catsFacts.filter(cat => cat.fact.includes(value));
  }

  async getData() {
    await this.catService.getCatFacts().subscribe(cat => this.catsFacts = cat.data) ;
  }

  queryAI = async() => {
    
    const genAI = new GoogleGenerativeAI("AIzaSyDttUl0-U7dOcP4d_g5z_zed7G2L5JWyyw");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const facts =this.catsFacts.map(fact => fact.fact);
    
    const prompt = `using this knowledge base ${facts.join()} answer the next questions : 1- Are how many cats are eaten every year in Asia? 2- Where is the cat's head when they chases their preys? 3- How a cat can get down from a tree?. The result should be a JSON collection defiined with name of "answers"`;
    
    const result = await model.generateContent(prompt);
    const tmpresult = result.response.text();
    const finalResult:Answers = JSON.parse(tmpresult.toString().replace("```json", "").replace("```", ""));
    console.log(finalResult)
    this.questionResponses = finalResult.answers;
  }

  constructor(private catService: CatService){
    
  }
  
  
}
