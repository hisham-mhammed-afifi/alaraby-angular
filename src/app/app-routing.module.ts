import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions/questions.component';
import { RecomendedComponent } from './questions/recomended/recomended.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: 'recomended/:id', component: RecomendedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
