import { Component } from '@angular/core';
import { Student } from "./student";
import { STUDENTS } from "./mock-students";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '30-by-30-step2';
  students: Student[] = STUDENTS;
}
