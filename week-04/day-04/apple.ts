'use strict';


class Apple{

    getApple(): string{
        return 'apple';
    }
}

let myApple: Apple = new Apple();
myApple.getApple();

export {Apple};