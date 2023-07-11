import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaneteComponent } from './planete/planete.component';
import { ImageComponent } from './image/image.component';
import { VideoComponent } from './video/video.component';
import { QuizComponent } from './quiz/quiz.component';
import { ForumComponent } from './forum/forum.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo: 'accueil', pathMatch:"full"},
  {path:'accueil', component:AccueilComponent},
  {path:'planete', component:PlaneteComponent},
  {path:'image', component:ImageComponent},
  {path:'video', component:VideoComponent},
  {path:'quiz', component:QuizComponent},
  {path:'forum', component:ForumComponent},
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
