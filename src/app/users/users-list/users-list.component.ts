import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList = [];

  constructor(private users: UsersService) { }

  ngOnInit() {  
    this.users.getUsers().subscribe(users => {
      this.usersList = users;
    })
  }

}
