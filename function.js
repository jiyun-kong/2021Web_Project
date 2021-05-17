// function without parameter
function sayHello() {
    console.log("Hello!");
}
sayHello();


// function with parameter
function sayWhatYouWant(words) {
    console.log("You say : " + words );
}
sayWhatYouWant("Hungry");


// function with two parameters
function nameAge(name, age) {
    return (`Hello ${name} you are ${age} years old`);
}
const result = nameAge("Jiyun", 21);
console.log(result);


// functions inside Object
const calculator = {
    plus : function(a, b) {
        return a+b;
    },
    minus : function(a, b) {
        return a-b;
    },
    multiple : function(a,b) {
        return a*b;
    },
    divide : function(a,b) {
        return a/b;
    }
}
const plus = calculator.plus(5,5);
console.log(plus);
