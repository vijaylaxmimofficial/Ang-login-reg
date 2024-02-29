import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  Singup:FormGroup|any;
  constructor() { }

  ngOnInit(): void {
    this.Singup = new FormGroup({
      'fname' : new FormControl(),
      'email' : new FormControl(),
      'number' : new FormControl(),
      'Password' : new FormControl()
    })
  }
  Singupdata(Singup:any) {
    const formData = this.Singup.value;

    // Retrieve existing records from local storage or initialize an empty array
    let existingRecords = JSON.parse(localStorage.getItem('userRecords') || '[]');

    // Add new form data to the existing records array
    existingRecords.push(formData);

    // Convert the updated records array to string
    const updatedRecordsString = JSON.stringify(existingRecords);

    // Store the updated records in local storage
    localStorage.setItem('userRecords', updatedRecordsString);

    // console.log('Form data stored in local storage:', formData);
  }

}
