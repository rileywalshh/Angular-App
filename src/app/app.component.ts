//imports required.
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

/*Decorator used to define component. It holds the HTML tag for the component that will be used in the router, it states the component is standalone, it has imports required for the component to function, it has its template HTML, and its stylesheet.*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AsssessmentTwo-PartTwo-Rwalsh25';
}
