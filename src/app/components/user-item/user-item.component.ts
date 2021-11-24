import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() user: User | null = null;
  constructor() {}

  ngOnInit(): void {}
}
