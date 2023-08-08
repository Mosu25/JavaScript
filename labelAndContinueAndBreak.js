
console.log("---- Loop -----------");
for (let i = 1; i < 5; i++) {

    console.log("Values of I:" + i);

}


console.log("---- Break -----------");
for (let i = 1; i < 5; i++) {
    if (i == 2) break;
    console.log("Values of I:" + i);
}

console.log("----Continue------");
for (let i = 1; i < 5; i++) {
    if (i == 2) continue;
    console.log("Values of I:" + i);
}

console.log("----Inner loop Continue------");

for (let i = 1; i < 5; i++) {

    console.log("Value of I: " + i);

    for (let j = 1; j < 5; j++) {

        if (j == 3) continue;
        console.log("Value of J: " + j);

    }

}

console.log("----Inner loop break------");
for (let i = 1; i < 5; i++) {

    console.log("Value of I: " + i);

    for (let j = 1; j < 5; j++) {

        if (j == 3) break;
        console.log("Value of J: " + j);

    }

}

console.log("----Inner label break------");
outer: for (let i = 1; i < 5; i++) {

    console.log("Value of I: " + i);

    inner: for (let j = 1; j < 5; j++) {
        if (j == 3) break outer;
        console.log("Value of J: " + j);
    }
}

console.log("----Inner label continue------");
outer: for (let i = 1; i < 5; i++) {

    console.log("Value of I: " + i);

    inner: for (let j = 1; j < 5; j++) {

        if (j == 3) continue outer;
        console.log("Value of J: " + j);

    }
}