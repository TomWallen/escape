import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { PriceComponent } from './components/price/price.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SurveyComponent } from './components/survey/survey.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomsListComponent } from './pages/rooms-list/rooms-list.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoomComponent } from './components/room/room.component';
import { MoreLessComponent } from './components/more-less/more-less.component';
import { RoomsPresentationComponent } from './components/rooms-presentation/rooms-presentation.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    PriceComponent,
    SurveyComponent,
    NewsletterComponent,
    HomeComponent,
    RoomsListComponent,
    AboutComponent,
    Error404Component,
    NavbarComponent,
    RoomComponent,
    MoreLessComponent,
    RoomsPresentationComponent,
    RoomDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
