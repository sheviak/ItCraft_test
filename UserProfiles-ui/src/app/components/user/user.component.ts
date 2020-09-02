import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  columns = ['email', 'fio'];

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.us.getUsers()
      .subscribe(
        res => { this.users = res; },
      );
  }
}