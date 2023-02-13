import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  users:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get("https://fakestoreapi.com/products").subscribe((result:any)=>{
      this.users = result;
    })
  }


}
