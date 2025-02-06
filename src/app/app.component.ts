import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleBarComponent, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'theangularapp';
}
