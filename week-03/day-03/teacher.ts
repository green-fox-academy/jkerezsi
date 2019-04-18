'use strict';

import { Student } from './student';

class Teacher {
    size: string;
    gender: string;


    constructor(size: string, gender: string) {
        this.size = size;
        this.gender = gender;
    }


    teach(student: Student) {
         student.learn();
        }
    answer() {
        console.log('answering');
    }
}

let Jozsi = new Teacher('tall', 'female');
let newStudent = new Student (23,'John');

Jozsi.teach();
export { Teacher };