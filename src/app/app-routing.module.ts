import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFeedComponent } from './components/create-feed/create-feed.component';
import { AllFeedComponent } from './components/all-feed/all-feed.component';

const routes: Routes = [
  {
    path: 'feeds',
    component: AllFeedComponent
  },
  {
    path: 'new-feed',
    component: CreateFeedComponent
  },
  {
    path: '**',
    redirectTo: 'feeds'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
