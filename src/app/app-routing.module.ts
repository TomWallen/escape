import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsListComponent } from './pages/rooms-list/rooms-list.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rooms-list', component: RoomsListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'room-detail/:id', component: RoomDetailComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
