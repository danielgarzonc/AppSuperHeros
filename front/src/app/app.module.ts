import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';

import { HerosService } from './services/heros.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroFormComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
