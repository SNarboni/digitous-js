// 01 - Somme des carrés
var result = 0;
for (var i = 5; i <= 10; i++) {
    var dada = i * i;
    result += dada;
}
console.log(result)
console.log("--------------------");


// 02 - Comptons
var result = 0;
for (var i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        result++
    }
}
console.log(result)
console.log("--------------------");


// 03 - Chanceux
var max = 0;
var min = 10;
for (var i = 1; i <= 20; i++) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random >= 5) {
        console.log(random)
    }
}
console.log(random)
console.log("--------------------");


// 04 - Des boites
var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);

//b1 + b2 = 10 T1
//b1 + b2 = 34 T2
//box 2 = 17 T1
//box 2 = 30 T2
//i = 14
console.log("--------------------");


// 05 - Des setiob
var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);//t1=12 / t2=24 / t3=33 / t4=39 / t5=42
    box1 = box1 + i;
}
console.log(box1);//t1=24 / t2=33 / t3=39 / t4=42 / t5=42
console.log(i);//t1=12 / t2=9 / t3=6 / t4=3 / t5=0


//
//
//
//
console.log("--------------------");

// 06 - Encore des boites
var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);
console.log("--------------------");

