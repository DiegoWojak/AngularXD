import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser, UserService } from './services/user.service';
import { worker } from '../mocks/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //RouterOutlet, 
    CommonModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'approvework-app';
  users: IUser[] = [];
  start = Date.now();
  userId = 0;
  /**
   *
   */
  constructor(private userService: UserService) {
    
  }


  ngOnInit(): void {
    worker.start().then(() => {
      this.loadUsers();
    });
  }

  loadUsers(){
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
    });
  }

  addUser() {
     this.userId = Date.now() - this.start
     const newUser = {
      name: `Usuario-${this.userId}-${ Math.floor(Math.random() * this.userId) }`,
      email: `user${this.userId}@example.com`
    };

     this.userService.createUser(newUser).subscribe(user => {
      this.users.push(user);
    });
  }


}
