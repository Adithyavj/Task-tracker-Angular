import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();


  // declare the properties we use in the form
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // basic validation to check if text is inputed
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    // we need to submit this newTask to the db.
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };
    
    // emit event for tasks
    this.onAddTask.emit(newTask);

    // clearing form values
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
