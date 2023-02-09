import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  formgroup:any;
  formArray:any = [];
  posting = false;


  ngOnInit(): void {
    this.load();
  }

  constructor(private router:Router) {
    this.formArray = JSON.parse(localStorage.getItem("users") || '[]');
    console.log(this.formArray);
  }

  load(){
    this.formgroup = new FormGroup({
      email:new FormControl(""),
      password:new FormControl("")
    })
  }

  submit(data:any){
    console.log(data);


    for(let i = 0;i < this.formArray.length; i++){
      if(data.email == this.formArray[i].email && data.password == this.formArray[i].password ){
        alert("Success");

        this.posting = true;

        this.router.navigate(['home']);
      }
    }
    if(this.posting == false){
      alert("Enter correct information");
    }


    this.load();
    
  }


  back(){
    alert("you have to go back to home page");

    this.router.navigate(['']);
  }

}
