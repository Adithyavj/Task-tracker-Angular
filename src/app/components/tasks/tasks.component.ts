import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // assign a property tasks as an array of Task[] - interface and give it the values from TASKS
  tasks: Task[] = [];
  // to use the service we have to pass it as argument in the constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // subscribing to get value from the observable getTasks()
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

}
