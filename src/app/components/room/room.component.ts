import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRoom } from 'src/app/models/room';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input() room: IRoom;
  @Input() displaySelection: boolean = true;
  @Input() text: any;
  @Output() selection = new EventEmitter();

  seeMore = false;

  constructor() { }

  ngOnInit() {
  }
  sel(room: any){
    this.selection.emit(room);
  }

}
