import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaneteComponent } from './planete/planete.component';
import { ImageComponent } from './image/image.component';
import { VideoComponent } from './video/video.component';
import { QuizComponent } from './quiz/quiz.component';
import { ForumComponent } from './forum/forum.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaneteComponent,
    ImageComponent,
    VideoComponent,
    QuizComponent,
    ForumComponent,
    AccueilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
