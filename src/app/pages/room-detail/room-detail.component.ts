import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RoomService } from 'src/app/services/room/room.service';
import { IRoom } from 'src/app/models/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {

  salle: any;

  constructor(public route: ActivatedRoute, public roomService: RoomService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
    (params: ParamMap) => {
      console.log(params.get('id'));
      let idx = parseInt(params.get('id'));
      let rooms = this.roomService.getRooms();

      console.log(rooms);

      this.salle = rooms.find((r: IRoom) => r.id == idx);

      }
    )
  }

}
