import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faCheck, faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.css']
})
export class StudentApplicationComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faCheck = faCheck;
  faIdCard = faIdCard;
  studentApply = localStorage.getItem('newStudentApplication');

  constructor() { }

  ngOnInit(): void { }

}
