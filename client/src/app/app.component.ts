import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'The Dating app';
  users: any;
  
  constructor(private http: HttpClient, private accountService: AccountService){}

  ngOnInit() {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      this.accountService.setCurrentUser(user);
    } else {
      this.accountService.setCurrentUser(null!);
    }
  }
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(respons => {
      this.users = respons;
    }, error => {
      console.log(error);
    })
  }
}
