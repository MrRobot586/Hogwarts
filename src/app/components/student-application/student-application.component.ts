import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { faArrowLeft, faCheck, faIdCard, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.css']
})
export class StudentApplicationComponent implements OnInit {

  // Font awesome icons
  public faArrowLeft = faArrowLeft;
  public faEye = faEye;
  public faCheck = faCheck;
  public faIdCard = faIdCard;

  public studentApply!:any;
  public newStudentApply!:FormGroup;
  
  constructor(private fb: FormBuilder ) {
    if(this.studentApply = localStorage.getItem('newStudentApplication')){
      this.studentApply = JSON.parse(this.studentApply);
    }else{
      this.studentApply = null;
    }
  }

  ngOnInit(): void { this.newStudentApply = this.initForm() }

  submitForm():void{
    localStorage.setItem('newStudentApplication', JSON.stringify(this.setUpData(this.newStudentApply)));
    window.location.reload();
  }

  setUpData(data:FormGroup):object{
    return {
      'fullname': data.get('fullname')?.value,
      'gender': data.get('gender')?.value,
      'species': data.get('species')?.value,
      'age': data.get('age')?.value,
      'dateofbirth': data.get('dateofbirth')?.value,
      'email': data.get('email')?.value,
      'status': 'Pending...'
    };
  }

  getInputValue(input:string):string{
    return this.newStudentApply.get(input)?.value;
  }

  initForm():FormGroup{
    return this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      species: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      dateofbirth: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  validateInput(input:string, condition:string, getwarn:boolean = false):any{
    if(getwarn){
      let message = '';
      switch (condition) {
        case 'required':
          message = 'This field is required!';
          break;

        case 'email':
          message = 'The email address is invalid, please verify it!';
          break;

        case 'minlength':
          message = `The value given is too short! Must contain at least ${this.newStudentApply.get(input)?.errors?.[condition].requiredLength} characters.`;
          break;
      
        default:
          message = 'The data provided is invalid!';
          break;
      }
      return message;
    }else{
      return (this.newStudentApply.get(input)?.touched && this.newStudentApply.get(input)?.errors?.[condition]);
    }
  }
}
