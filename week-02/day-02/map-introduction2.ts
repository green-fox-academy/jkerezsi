let Map2: any = {
    '978-1-60309-452-8': "A letter to Jo",
    '978-1-60309-459-7': "Lupus",
    '978-1-60309-444-3': "Red Panda and Moon Bear",
    '978-1-60309-461-0': "The Lab",	
}

Object.keys(Map2).forEach(e => {
    console.log(Map2[e] + " (ISBN: " + e + ")");
});

delete Map2 ['978-1-60309-444-3'];

console.log(Map2);

Object.keys(Map2).forEach(e => {
    if(Map2[e] == "The Lab") {
        delete Map2 [e];
    }
});

Map2 = {'978-1-60309-450-4': "They Calles Us Enemy"};
Map2 = {'978-1-60309-453-5' : "Why Did we Trust Him?"};

console.log(Map2);

Object.keys(Map2).forEach(e => {
    if(Map2[e] === 61159-424-8)
    console.log(Map2[e]);
})

Object.keys(Map2).forEach(e => {
    if(Map2[e] === 978-1-60309-453-5)
    console.log(Map2[e]);
})