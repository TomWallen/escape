import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  @Input() title : string;

  totalPrice: number = 160;
  nbPerson: number = 4;


  constructor() { }

  ngOnInit() {
  }

  priceByPerson(){
    return Math.floor(this.totalPrice / this.nbPerson)
  }

  retirer(){
    this.nbPerson--;
  }

  ajouter(){
    this.nbPerson++;
  }

  verifyPromo(value: string){
    console.log(value);
    if(value === "REDUC"){
      this.totalPrice = 120;
    }
  }


}
