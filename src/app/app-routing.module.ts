import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page/:name', component: PageComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
