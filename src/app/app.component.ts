import { Component } from '@angular/core';

import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hogwarts-app-prototype';
  faHatWizard = faHatWizard;
}
