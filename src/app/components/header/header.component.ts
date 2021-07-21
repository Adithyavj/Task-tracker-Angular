import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  // to use service we add it in ctor
  // we also need to access router here so, we add it in ctor
  constructor(private uiService: UiService, private router: Router) {
    this.showAddTask = false;
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    // console.log('toggle');
    //
    this.uiService.toggleAddTask();
  }

  // function will be called in button component tag in header to check if route is index
  // this is done so that Add button is only shown in index route and no other routes
  hasRoute(route: string) {
    // return true/false
    return this.router.url === route;
  }

}
