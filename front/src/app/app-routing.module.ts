import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './components/hero-list/hero-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroe', pathMatch: 'full' },
  { path: 'heroe', component: HeroListComponent},
  { path: '**', redirectTo: 'heroe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
