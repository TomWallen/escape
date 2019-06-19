import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-more-less',
  templateUrl: './more-less.component.html',
  styleUrls: ['./more-less.component.scss']
})
export class MoreLessComponent implements OnInit {

  @Input() value: number;
  @Input() min: number;
  @Input() max: number;
  @Output() valChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  plus(){
    this.value++;
    this.valChange.emit(this.value);
  }

  moins(){
    this.value--;
    this.valChange.emit(this.value);
  }
 
}
