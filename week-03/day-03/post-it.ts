'use strict';

class PostIT {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor (backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }

}

const Idea1: PostIT = new PostIT ('orange','Idea1','blue' );
const Awesome: PostIT = new PostIT ('pink','Awesome','black' );
const Superb: PostIT = new PostIT ('yellow','Superb','green' );

console.log(Idea1);
console.log(Awesome);
console.log(Superb);
