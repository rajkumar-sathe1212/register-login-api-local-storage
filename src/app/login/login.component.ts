import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formgroup:any;
  formArray:any = [];


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.formgroup = new FormGroup({
      name:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl("")
    })
  }


  submit(data:any):any{
    this.formArray.push(data);

    localStorage.setItem("users",JSON.stringify(this.formArray));

    this.load();

    this.router.navigate(['registration']);
  }

}
