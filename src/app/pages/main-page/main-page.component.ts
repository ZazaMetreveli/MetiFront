import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from '../../components/main-header/main-header.component';
import { MainFooterComponent } from '../../components/main-footer/main-footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, MainHeaderComponent, MainFooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
