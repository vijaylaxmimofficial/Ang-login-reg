import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  login: FormGroup | any;
  userRecords: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl(),
      'Password': new FormControl()
    });
    
    // Retrieve user records from local storage
    const storedRecords = localStorage.getItem('userRecords');
    this.userRecords = storedRecords ? JSON.parse(storedRecords) : [];
  }

  logindata(login:any) {
    const formData = this.login.value;
    
    const matchedUser = this.userRecords.find(user => user.fname === formData.fname && user.Password === formData.Password);
    
    if (matchedUser) {
     alert('Login successful');
      
    } else {
      alert('Invalid credentials');
       
    }
  }
}
