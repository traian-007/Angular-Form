import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TitleService } from 'src/app/services/title/title.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userService: UserService,
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }
  backToForm(): void {
    this.router.navigate(['']);
    this.titleService.toogleTitle();
  }
}
