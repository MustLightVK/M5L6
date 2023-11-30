//------------------------------------------task_1
"42" == 42 //true
"0" == 0 //true
"0" == false //true
"true" == true //false
(true == (1 == "1")) //true

"42" === 42 //false
"0" === 0 //false
"0" === false //false
"true" === true //false
true === (1 === "1") //false
//------------------------------------------task_2
let a = 'apple';
let b = 'banana';
console.log(a>b); //false
console.log(a<b); //true
console.log(a==b); //fause

let h = 'hello';
let w = 'world';
console.log(h>w); //false
console.log(h<w); //true
console.log(h==w); //false

let i = 'apple';
let j = 'aPple';
console.log(i>j); //true
console.log(i<j); //false
console.log(i==j); //false
//------------------------------------------task_3
let score = 50;

if (score >= 90) {
    console.log('Отличная работа!')
} else if (score >= 70 && score < 90) {
    console.log('Хорошая работа!')
} else {
    console.log('Попробуйте ещё раз')
}
//------------------------------------------task_4
let result;
let number = 4;

result = number % 2 == 0 ? 'Значение number - четное число' : 'Значение number - нечетное число';

console.log(result);
//------------------------------------------task_5
let num1 = 4;
let num2 = 3;

if (num1 > num2) {
    console.log('num1 больше num2')
} else if (num1 < num2) {
    console.log('num2 больше num1')
} else if (num1 == num2) {
    console.log('num1 и num2 равны')
}
//------------------------------------------task_6
let fruit = 'яблоко';

if (fruit === 'яблоко' || fruit === 'груша' || fruit === 'банан') {
    console.log('Этот фрукт можно съесть');
} else if (fruit === 'дуриан' || fruit === 'рамбутан' || fruit === 'джекфрут') {
    console.log('Это экзотический фрукт, будь осторожен');
} else {
    console.log('Это не фрукт или фрукт неизвестен');
}
//------------------------------------------task_7
let grade = 5;

switch (grade){
    case 5:
        console.log('Отлично')
        break;
    case 4:
        console.log('Хорошо')
        break;
    case 3:
        console.log('Удовлетворительно')
        break;
    case 2:
        console.log('Неудовлетворительно')
        break;
    default:
        console.log('Неизвестно')
}