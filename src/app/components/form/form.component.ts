import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormControlName,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TitleService } from 'src/app/services/title/title.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  changeTitle!: boolean;
  subscription!: Subscription;
  constructor(
    private userService: UserService,
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {}
  loginForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.email),
  });

  registerUser(): void {
    this.userService.addUser(this.loginForm.value);
    this.router.navigate(['/users']);
    this.titleService.toogleTitle();
  }
}
