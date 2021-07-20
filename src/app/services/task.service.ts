import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// taking the httpheaders to send with the content type
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // property for apiURL
  private apiUrl = "http://localhost:5000/tasks";

  // to call the http service in the task.service, we have to pass it in constructor
  // here we pass in an HttpClient called http
  constructor(private http: HttpClient) { }

  // GET:
  getTasks(): Observable<Task[]> {
    // converting TASK to observable using of() before returing it
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }

  // DELETE:
  deleteTask(task: Task): Observable<Task> {
    // for deleting we need the id of the task
    // this will use the url: http://localhost:5000/{id}
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  // POST:
  updateTaskReminder(task: Task): Observable<Task> {
    // for updating the reminder in db
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}
