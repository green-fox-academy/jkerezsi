//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function sortNumber (a:number,b:number):number{
    return a-b;
}


function advancedBubble(x:number [],y:boolean){
    if(y === false) {
        return x.sort(sortNumber);
    } else {
        return x.sort(sortNumber).reverse();
    }};
    
    
    // //  Example:
    // console.log(bubble([34, 12, 24, 9, 5]));
    //  should print [5, 9, 12, 24, 34]
    console.log(advancedBubble([34, 12, 24, 9, 5], false));
    //  should print [34, 24, 12, 9, 5]