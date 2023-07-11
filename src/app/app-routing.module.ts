import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaneteComponent } from './planete/planete.component';
import { ImageComponent } from './image/image.component';
import { VideoComponent } from './video/video.component';
import { QuizComponent } from './quiz/quiz.component';
import { ForumComponent } from './forum/forum.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'planete', component:PlaneteComponent},
  {path:'image', component:ImageComponent},
  {path:'video', component:VideoComponent},
  {path:'quiz', component:QuizComponent},
  {path:'forum', component:ForumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
