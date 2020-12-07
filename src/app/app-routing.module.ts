import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchsComponent } from './componants/add-matchs/add-matchs.component';
import { AddPlayerComponent } from './componants/add-player/add-player.component';
import { AddStadiumComponent } from './componants/add-stadium/add-stadium.component';
import { AdminChildComponent } from './componants/admin-child/admin-child.component';
import { AdminComponent } from './componants/admin/admin.component';
import { BlogsComponent } from './componants/blogs/blogs.component';
import { ContactComponent } from './componants/contact/contact.component';
import { DisplayMatchComponent } from './componants/display-match/display-match.component';
import { EditMatchComponent } from './componants/edit-match/edit-match.component';
import { EditPlayerComponent } from './componants/edit-player/edit-player.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { MatchessComponent } from './componants/matchess/matchess.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';
import { PlayersComponent } from './componants/players/players.component';
import { ServiceComponent } from './componants/service/service.component';
import { SignupComponent } from './componants/signup/signup.component';

const routes: Routes = [
  //localhost:4200 : URL de base 
  {
    path: '', component: HomeComponent
  },
  //localhost:4200/contact==>Afficher contact

  //localhost:4200/service==>Afficher service
  { path: 'service', component: ServiceComponent },
  { path: 'add-stadium', component: AddStadiumComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'matchess', component: MatchessComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminChild', component: AdminChildComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'add-matchs', component: AddMatchsComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-match/:id', component: EditMatchComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'display-match/:id', component: DisplayMatchComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
