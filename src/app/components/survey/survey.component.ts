import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  pseudo : string = "Celestin";
  

  survey = {
    pseudo: 'Titouan',
    category: 'Histoire'
  }

  constructor() { }

  ngOnInit() {
  }

  validate(){
    // console.log(this.pseudo);
    console.log(this.survey)
  }

}
