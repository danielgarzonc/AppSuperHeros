import { Component, HostBinding, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HerosService } from "../../services/heros.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  heros: any = [];

  constructor(private herosService: HerosService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() {
    this.herosService.getHeros().subscribe(
      res => {
        this.heros = res;
      },
      err => console.error(err)
    );
  }

  deleteHeroe(id: string) {
    this.herosService.deleteHero(id).subscribe(
      res => {
        console.log(res);
        this.getHeros();
      },
      err => console.log(err)
    )
  }

}
