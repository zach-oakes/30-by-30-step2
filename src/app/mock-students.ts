import {Student} from "./student";
import {TEACHERS} from "./mock-teachers";
import {Teacher} from "./teacher";

export const STUDENTS: Student[] = [
  {
    id: 1,
    firstName: 'Bart',
    lastName: 'Simpson',
    course: 'Math',
    teacher: randomTeacher(),
  },
  {
    id: 2,
    firstName: 'Fred',
    lastName: 'Flintstone',
    course: 'Science',
    teacher: randomTeacher(),
  },
  {
    id: 3,
    firstName: 'Hank',
    lastName: 'Hill',
    course: 'History',
    teacher: randomTeacher(),
  },
  {
    id: 4,
    firstName: 'Hulk',
    lastName: 'Hogan',
    course: 'Science',
    teacher: randomTeacher(),
  },
  {
    id: 5,
    firstName: 'Mickey',
    lastName: 'Mouse',
    course: 'Math',
    teacher: randomTeacher(),
  }
];

export function randomTeacher(): Teacher {
  const index = Math.floor(Math.random() * TEACHERS.length);

  return TEACHERS[index];
}
