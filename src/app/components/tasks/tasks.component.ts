import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    // this is how we handle the observable
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      // after deleting, refresh the tasks by filtering out the deleted one.
      () => this.tasks = this.tasks.filter(t => t.id !== task.id)
    )
  }

  toggleReminder(task: Task){
    // on double clicking the task, its reminder gets set opposite to what it currently is
    // double click - turn on/turn off reminder
    task.reminder  = !task.reminder;
    // to update value in db
    this.taskService.updateTaskReminder(task).subscribe();
    //console.log(task.reminder);
  }

  addTask(task: Task){
    console.log(task);
  }
}
