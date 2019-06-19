import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room/room.service';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  rooms: IRoom[];

  seeMore = false;
  selectedRoom: IRoom;
  difficultyMin: number = 2;

  constructor(public roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }

}
