// задание 1 - проверка четных и нечетных номеров prmompt

let num = +prompt("Введите символ");

if (isNaN(num)) {
  console.log("Кажется, Вы ошиблись");
} else if (typeof(num) == 'number' && num % 2 === 0) {
  console.log("Четное число");
} else if (typeof(num) == 'number' && num % 2 > 0) {
  console.log("Нечетное число");
}

// задание 2 - определение типа Х 

let x = ;
if (typeof(x) == 'number') {
  console.log("Х - число")
} else if (typeof(x) == 'boolean') {
  console.log("Х - логическое значение")
} else if (typeof(x) == 'string') {
  console.log("Х - строка")
} else {
  console.log("Тип Х не определён")
}

// задание 3 - разворот строки

function reverseString(string) {
  let someArray = string.split("");
  let result = someArray.reverse();
  return result.join("");
}

console.log(reverseString());

// задание 4 - число от 1 до 100

let x = Math.ceil(Math.random() * 100);
console.log(x);

// задание 5 - перебор массива

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.length);

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
};

// задание 6 - сравнение элементов внутри массива

let arr = [2, 2, 2, 2, 2];

let newArray = Array.from(new Set(arr));

if (newArray.length === 1) {
  console.log(true);
} else {
  console.log(false);
}

// задание 7 - количество четных и нечетных элементов в массиве

let array = [24, 5, 8, 1, 2, 3, null, 0, undefined]

let odd = 0;
let even = 0;
let zero = 0;
let notANumber = 0;

array.forEach(function (item) {
  if (isNaN(item) || item === null) {
    notANumber++;
  } else if (item === 0) {
    zero++;
  } else if (item % 2 === 0) {
    even++;
  } else if (item % 2 > 0) {
    odd++;
  }
});

console.log(`Нечетных числел: ${odd}, четных чисел: ${even}, нулей: ${zero}, не являются числом: ${notANumber}`);

// задание 8

let myMap = new Map;
myMap.set("1", "value1");
myMap.set("2", "value2");
myMap.set("3", "value3");

for (let [name, value] of myMap) {
  console.log(`ключ: ${name}, значение: ${value}`);
}
