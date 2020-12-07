import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import { ContactComponent } from './componants/contact/contact.component';
import { ServiceComponent } from './componants/service/service.component';
import { HomeComponent } from './componants/home/home.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';
import { LoginComponent } from './componants/login/login.component';
import { SignupComponent } from './componants/signup/signup.component';
import { WorldCupComponent } from './componants/world-cup/world-cup.component';
import { ScoreComponent } from './componants/score/score.component';
import { NewsComponent } from './componants/news/news.component';
import { NewMatchesComponent } from './componants/new-matches/new-matches.component';
import { VideoComponent } from './componants/video/video.component';
import { OurBlogComponent } from './componants/our-blog/our-blog.component';
import { NewComponent } from './componants/new/new.component';
import { MatchessComponent } from './componants/matchess/matchess.component';
import { BlogsComponent } from './componants/blogs/blogs.component';
import { AdminComponent } from './componants/admin/admin.component';
import { AdminChildComponent } from './componants/admin-child/admin-child.component';
import { PlayerComponent } from './componants/player/player.component';
import { PlayersComponent } from './componants/players/players.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddMatchsComponent } from './componants/add-matchs/add-matchs.component';
import { AddPlayerComponent } from './componants/add-player/add-player.component';
import { EditMatchComponent } from './componants/edit-match/edit-match.component';
import { EditPlayerComponent } from './componants/edit-player/edit-player.component';
import { DisplayMatchComponent } from './componants/display-match/display-match.component';
import { DisplayPlayerComponent } from './componants/display-player/display-player.component';
import { SearchComponent } from './componants/search/search.component';
import { StadiumComponent } from './componants/stadium/stadium.component';
import { AddStadiumComponent } from './componants/add-stadium/add-stadium.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServiceComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    WorldCupComponent,
    ScoreComponent,
    NewsComponent,
    NewMatchesComponent,
    VideoComponent,
    OurBlogComponent,
    NewComponent,
    MatchessComponent,
    BlogsComponent,
    AdminComponent,
    AdminChildComponent,
    PlayerComponent,
    PlayersComponent,
    AddMatchsComponent,
    AddPlayerComponent,
    EditMatchComponent,
    EditPlayerComponent,
    DisplayMatchComponent,
    DisplayPlayerComponent,
    SearchComponent,
    StadiumComponent,
    AddStadiumComponent
  ],
  imports: [
    BrowserModule,
    // InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
