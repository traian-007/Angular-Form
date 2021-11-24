import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  title: string = 'Form';
  changeTitle: boolean | null = null;
  subscription: Subscription | null = null;
  constructor(private titleService: TitleService) {
    this.subscription = this.titleService
      .onToggle()
      .subscribe((value) => (this.changeTitle = value));
  }

  ngOnInit(): void {}
}
