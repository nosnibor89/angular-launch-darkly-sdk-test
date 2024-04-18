import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './main-layout-component.component.html',
  styleUrl: './main-layout-component.component.scss'
})
export class MainLayoutComponentComponent {

}
