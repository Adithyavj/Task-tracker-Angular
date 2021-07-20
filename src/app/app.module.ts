import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent, // these are components
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule, // This is for importing the module for fontawesome
    HttpClientModule, // imports HttpClientModule
    FormsModule // import this for using ngModel for 2 way biding between form input and property
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
