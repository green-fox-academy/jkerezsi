let myMap : any = {
    13: "ey",
    44: "df",
    6: "fff"
};

if (myMap !== null) {
    console.log("myMap is not empty");
} else {
    console.log("myMap is empty");
}

myMap [97] = "a";
myMap [98] = "b";
myMap [99] = "c"; 
myMap [65] = "A";
myMap [66] = "B";
myMap [67] = "C";

console.log(Object.keys(myMap));

console.log(Object.values(myMap));

myMap [68] = "D";

console.log(Object.keys(myMap).length);

console.log(myMap[99]);

delete myMap[97]

if( myMap.keys == [100]) {
    console.log("There is a key #100");
} else {
    console.log("There is no key #100");
}

myMap = [];