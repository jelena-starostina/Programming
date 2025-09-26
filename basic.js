//1.обьявление переменных

var oldStyleVar ="Это старая переменная";

let newStyleVar ="Это новая переменная";
newStyleVar = "новое значение переменной";
const constantVar ="Это константа";
//constantVar ="попытка заменить константу"; // константу изменить нельзя
console.log(oldStyleVar);
console.log(newStyleVar);
console.log(constantVar);
console.log(newStyleVar);
console.log(constantVar);

//2. Типы данных

// Простые (примитивные) типы данных
const stringType = "Это строка"; // String
const numberType =42  // Number
const booleanType = true  // Boolean
const тгддType = null;   // Null
let undefinedType; // Undefined (значение не присвоено)
const symbolType = Symbol ("id");   // Symbol
const bigIntType = 900719925432542n; // Bigint (очень большой объект)

// сложные типы данных
// массив (упорядочная коллекция элиментов)
const arrayType = [1,"два", true, {name:"вложенный объект"};] // Array

// объект (неупорядочная коллекция пар "ключ-значение")
const objectType = {
    name:"Alex",
    age:30,
    isStudet:  false,
"ключ с пробелами": "так тоже можно"
};

console.log("----типы данных---");
console.log("stringType", stringType);
console.log("numberType", numberType);
console.log("booleanType", booleanType);
console.log("nullType", nullType);
console.log("unifinedType", unifinedType);
console.log("symbolType", symbolType);
console.log("bigintType", bigintType);
console.log("arrayType", arrayType);
console.log("objectType", objectType);
console.log("Доступ к свойству объект", objectType.name); //Alex
console.log("Доступ к элементу массива", arrayType  [1]); //два

//3. Работа с массивами
const fruits = ["яблоко","банан","киви"];
console.log("-------работа с массивами-------");
console.log("Исходный массив:", fruits);

//добавление элементов в конец массива
fruits.push("апельсин");
console.log("После push:", fruits);

//удаление последнего элемента
const lastFruits = fruits.pop();
console.log("Удалённый элемент:", lastFruits);
console.log("После pop:", fruits);

//доступ к элементу по индексу (начиная с 0)
console.log("Первой элемент массива:", fruits[0]);

//длина массива
console.log("Длина массива :", fruits.length);

//условные операторы
const age = 20;

console.log("-------Условные операторы-------");

//if else
if (age < 18) {
 console.log("Вы не совершеннолетний");
 } else {
    console.log("Вы совершеннолетний");
}  

  // if else if else
const score = 85;
  if (score >= 90) {
    console/log("Отлично");
} else  if (score >= 75) {
    console/log("Хорошо");
} else {
     console/log("Удовлетворительно");
}  

//switch case (строгое сравнение)
const fruit = "Яблоко";
switch (fruit) {
case "Банан":
сonsole.log("Это банан");
break;
case "Яблоко":
  сonsole.log("Это яблоко");  
break;
default:
сonsole.log("Неизвестный фрукт");  
}  

//Циклы

console/log("-------циклы-------");

//цикл for (классический) i = i+2
for (let i = 0; i < 5; i++) {
 console/log("Интерация номер:", i);
} 

//цикл while (пока условие истинно)
let count = 0; 
while (count < 5) {
console/log("Счётчик номер", count);
count++; 
} 

//цикл do while (сначала выполнит, потом проверит условие)
let doCount = 5;
do {
    console.log("do white счётчик номеров:",doCount);
    doCount++;
    } while (doCount < 5); // выполняется один раз

    //цикл по перебору массива
    const colors = ["красной","зелёный","синий"];
    for (let color of colors) {
        console.log("Цвет:", color);
        } 

        //метод перебора массива forEach
        colors.forEach((color, index)=> {
 console.log(`Цвет ${index}: ${color}`);
 });