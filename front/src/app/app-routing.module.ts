import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroFormComponent } from "./components/hero-form/hero-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/heroe', pathMatch: 'full' },
  { path: 'heroe', component: HeroListComponent },
  { path: 'heroe/add', component: HeroFormComponent },
  { path: 'heroe/edit/:id', component: HeroFormComponent },
  { path: '**', redirectTo: 'heroe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
