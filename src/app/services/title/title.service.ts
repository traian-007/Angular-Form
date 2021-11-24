import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private changeTitle: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toogleTitle(): void {
    this.changeTitle = !this.changeTitle;
    this.subject.next(this.changeTitle);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
