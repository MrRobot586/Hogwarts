import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hogwarts-app-prototype';

  constructor (private NgxSpinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.loadingSpinner();
  }

  loadingSpinner(){
    this.NgxSpinner.show();
    setTimeout(() => {
      this.NgxSpinner.hide();
    }, 3000);
  }
}
