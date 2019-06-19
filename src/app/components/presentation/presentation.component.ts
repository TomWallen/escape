import { Component, OnInit } from '@angular/core';

interface ISlide {
  title: string;
  image: {
    src: string;
    alt: string;
    title: string;
  }
}


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  slide: ISlide = {
    title: 'Vous etes bloqués pendant une heure !',
    image: {
      src: './assets/img/lunettes.jpg',
      alt: 'escape1',
      title: 'esc1'

    }
  }

  nBClassicRooms: number = 3;
  nBVirtualrooms: number = 2;
  
  IsDisabled = false;
  link = "http://google.fr";
  value = 'bobby';

  constructor() {
   }

  ngOnInit() {
    setTimeout(
      () => {
        this.slide = {
          title: 'Saurez-vous sortir?',
          image: {
            src: './assets/img/tableaux.jpg',
            alt: 'escape2',
            title: 'esc2'
      
          }
        }
            },
      2500
    )
  }

  lastLi() {
    return 'GL HF';
  }

  seeMore(){
    alert('Voila, tu vois plus');
  }
}