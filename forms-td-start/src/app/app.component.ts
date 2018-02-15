import { Component, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male','female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },                               // In this method exact copy of object is required and overwrite all fields
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

   this.signupForm.form.patchValue({
     userData: {
       username: suggestedName        // In this only specific key-value pairs are required not exact copy
     }
   });

  }



  // onSubmit (form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
