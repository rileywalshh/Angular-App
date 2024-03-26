//Imports required by this component.
import { Component } from '@angular/core';

/*Decorator used to define component. It holds the HTML tag for the component that will be used in the router, it states the component is standalone, it has imports required for the component to function, it has its template HTML, and its stylesheet.*/
@Component({
  selector: 'help-page',
  standalone: true,
  imports: [],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {

}
