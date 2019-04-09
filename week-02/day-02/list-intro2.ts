let ListA = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

let ListB = ListA;

if (ListA.includes("Durian")) {
    console.log("Yes it includes Durian");
} else {
    console.log("No it does not include");
}

ListB.splice(3,1);
console.log(ListB);

ListA.splice(4,0, "Kiwifruit");
console.log(ListA);

if ( ListA.length > ListB.length) {
    console.log("ListA is bigger than ListB");
} else {
    console.log("ListB is bigger than ListA");
}

console.log(ListA.indexOf("Avocado"));
console.log(ListB.indexOf("Durian"));

ListB.push("Passion Fruit", "Pummelo");
console.log(ListA[2]);