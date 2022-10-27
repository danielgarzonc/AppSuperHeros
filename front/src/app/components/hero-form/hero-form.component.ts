import { Component, HostBinding, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HerosService } from "../../services/heros.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

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

  edit: boolean = false;

  constructor(private heroService: HerosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if(params['id']){
      this.heroService.getHero(params['id'])
      .subscribe(
        res => {
          console.log(res);
          this.hero = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewHero() {
    delete this.hero.id;
    delete this.hero.creation_date;

    this.heroService.addHero(this.hero).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/heros']);
      },
      err => console.error(err)
    )
  }

  updateHero(){
    delete this.hero.creation_date;
    this.heroService.updateHero(this.hero.id, this.hero).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/heros']);
      },
      err => console.log(err)
    )
  }

}
