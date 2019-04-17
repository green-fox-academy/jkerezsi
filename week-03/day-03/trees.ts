'use strict';

// trees = [
// {type:'American Hornbeam', color:'brown', age: '12', sex:'male'},
// {type:'Gingko', color:'green', age: '10', sex:'female'},
// {type:'Honey Locust', color:'light green', age: '444', sex:'male'},
// {type:'Japanese Pagoda', color:'yellow', age: '232', sex:'female'},
// {type:'Hardy Rubber Tree', color:'dark green', age: '23', sex:'female'}
// ]

class Tree {
    type: string;
    leafColor: string;
    age: number;
    gender: string;
    isEvergreen: boolean;

constructor(type:string, leafColor:string,gender:string, isEvergreen:boolean) {
    this.age = 0;
    this.type = type;
    this.leafColor = leafColor;
    this.gender = gender;
    this.isEvergreen = isEvergreen;
    }
    giveMeInfoAboutMyTree(): void {
        console.log(`Your tree is a(n) ${this.gender + ' ' + this.type} aged ${this.age} with ${this.leafColor} leaves and it is ${this.isEvergreen ? 'evergreen' : 'not evergreen'}`)
    }
}

const myFirstTree: Tree = new Tree ('oak','green','female',false);
myFirstTree.giveMeInfoAboutMyTree();

