import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HerosService } from "../../services/heros.service";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  hero: Hero = {
    creation_date: new Date(),
    id: 0,
    name: '',
    hero_type: '',
    operation_place: '',
    condicion: '',
    power_type: '',
    vehicle: '',
    image: ''
  };

  constructor(private heroService:HerosService) { }

  ngOnInit(): void {
  }

  saveNewHero(){
    delete this.hero.id;
    delete this.hero.creation_date;
    
    this.heroService.addHero(this.hero).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
