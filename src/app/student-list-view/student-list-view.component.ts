import { Component, Input } from '@angular/core';
import { Student } from "../student";

@Component({
  selector: 'app-student-list-view',
  templateUrl: './student-list-view.component.html',
  styleUrl: './student-list-view.component.css'
})
export class StudentListViewComponent {
  @Input() students: Student[] = [];
  @Input() selectedStudent?: Student;

  selectStudent(student: Student): void {
    // Select
    if (!this.selectedStudent || this.selectedStudent !== student) {
      this.selectedStudent = student;
    } else {
      // Unselect
      this.selectedStudent = undefined;
    }
  }

  deleteStudent(student: Student): void {
    if (this.students) {
      this.students = this.students.filter(s => s.id !== student.id);
    }

    this.selectedStudent = undefined;
  }

  updateStudentList(student: Student): void {
    const index = this.students.findIndex(s => s.id === student.id);

    // -1 if not found
    if (index !== -1) {
      this.students[index] = student
    }
  }
}
