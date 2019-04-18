'use strict';
import { Teacher } from './teacher';

class Student {
    age: number;
    name: string;
   

    constructor (age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    learn () {
        console.log('learning');
    }

    question (teacher: Teacher):void {
     teacher.answer();
    }
}

let newStudent = new Student (23,'John');
let Jozsi = new Teacher('tall', 'female');

newStudent.question(Jozsi);

export { Student };