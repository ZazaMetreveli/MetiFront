import { Component } from '@angular/core';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeAdvantagesComponent } from './home-advantages/home-advantages.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeRelationshipsComponent } from './home-relationships/home-relationships.component';
import { HomePartniorsComponent } from './home-partniors/home-partniors.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeHeroComponent,
    HomeAdvantagesComponent,
    HomeServicesComponent,
    HomeRelationshipsComponent,
    HomePartniorsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
