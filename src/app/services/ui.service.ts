import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // represents whether a task is shown or not
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  // function to toggle the showAddTask
  toggleAddTask(): void {
    // on toggle, we set it to opposite value
    this.showAddTask = !this.showAddTask;
    // setting next value of subject
    this.subject.next(this.showAddTask);
  }

  ontoggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
