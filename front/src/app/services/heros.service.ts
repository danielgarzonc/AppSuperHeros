import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hero } from "../models/hero";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {

   }

   getHeros(){
    return this.http.get(`${this.API_URI}/heros`);
   }

   getHero(id: string){
    return this.http.get(`${this.API_URI}/heros/${id}`);
   }

   addHero(hero: Hero){
    return this.http.post(`${this.API_URI}/heros`, hero);
   }

   deleteHero(id: string){
    return this.http.delete(`${this.API_URI}/heros/${id}`);
   }

   updateHero(id?: string|number, updatedHero?: Hero): Observable<Hero>{
    return this.http.put(`${this.API_URI}/heros/${id}`, updatedHero);
   }
}
