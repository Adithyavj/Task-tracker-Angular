import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks'; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // assign a property tasks as an array of Task[] - interface and give it the values from TASKS
  tasks: Task[] = TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
