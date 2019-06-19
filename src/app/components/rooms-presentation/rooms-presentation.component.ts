import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room/room.service';

@Component({
  selector: 'app-rooms-presentation',
  templateUrl: './rooms-presentation.component.html',
  styleUrls: ['./rooms-presentation.component.scss']
})
export class RoomsPresentationComponent implements OnInit {

  rooms: IRoom[];

  constructor(public roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }

}
