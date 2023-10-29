// Реализовать рекурсивную функцию которая возводит число в степень.

// Число которое нужно возвести в степень передается как первый аргумент в функцию

// Степень передается как второй аргумент в функцию

// pow(num, degree)

// let num;
// let degree;
// function getNum() {
//   do {
//     num = parseInt(prompt('enter num', ''))
//   } while (isNaN(num))
// }
// function getDegree() {
//   do {
//     degree = parseInt(prompt('enter num', ''))
//   } while (isNaN(num))
// }

// function pow(num,degree) { // 2**3    2*2*2
//   if (degree > 1) {
//     return num * pow(num,degree - 1)
//   }
//   return num
// }
// console.log(pow(2,3))


//----------
// Написать функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором — суммирует переданный параметр с тем, 
// что передали первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28

// function qwe(param) {
//   let sum = 0;
//   return function(param) {
//     return console.log(sum += param)
//   }
// }
// let asd = qwe();
// asd(3);
// asd(5);
// asd(20);



//--------
// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной znak может быть: +, -, *, /, %, ^ (степень). 
// Вывести результат математического действия, указанного в переменной znak. Оба числа и знак получаются от пользователя.

// const znaki = ['+', '-', '*', '/', '%', '^'];
// function getNum() {
//   let num;
//   do {
//     num = parseInt(prompt('enter 1st num', ''))
//   } while (isNaN(num))
//   return num;
// }
// function getSecNum() {
//   let second;
//   do {
//     second = parseInt(prompt('enter 2nd num', ''))
//   } while (isNaN(second))
//   return second;
// }

// function getZnak() {
//   let znak;
//   let equal = false;
//   do {
//     znak = prompt('enter znak', '');
//     for (let i = 0; i < znaki.length; i++) {
//       if (znaki[i] === znak) {
//         equal = true;
//         break;
//       }
//     }
//   } while (znak === null || equal === false)
//   return znak
// }

// function operation(x, znak, y) {
//   if (znak === '+') {
//     console.log(x + y)
//   } else if (znak === '-') {
//     console.log(x - y)
//   } else if (znak === '*') {
//     console.log(x * y)
//   } else if (znak === '/') {
//     console.log(x / y)
//   } else if (znak === '%') {
//     console.log(x % y)
//   } else if (znak === '^') {
//     console.log(x ** y)
//   }
// }

// (function() {
//   const first = getNum()
//   const sec = getSecNum()
//   const znak = getZnak()
//   operation(first, znak, sec)
// })()



//--------
// Написать функцию заполнения пользовательскими данными двумерного массива. 
// Длину основного массива и внутренних массивов задаёт пользователь. Значения всех элементов всех массивов задаёт пользователь.

// const mainArr = [];
// let num;

// function getQuantityMassives() { // tut budet 4islo massivov
//   do {
//     num = parseInt(prompt('enter how many massives', ''))
//   } while (isNaN(num));
//   for (let i = 0; i < num; i++) {
//     mainArr.push([])
//   }
//   return num;
// }

// function fillMassive() { // tut zapolniaem -nado peredat num
//   let nums;
//   let numInArr;
//   for (let i = 0; i < num; i++) {
//     do {
//       nums = parseInt(prompt(`skolko hochesh w ${i} massive?`, '')) //5 4isel
//     } while (isNaN(nums));
//     for (let j = 0; j < nums; j++) {
//       do {
//         numInArr = parseInt(prompt(`vvedi ${j} 4islo`, ''))
//       } while (isNaN(numInArr));
//       mainArr[i].push(numInArr)
//     }
//   }
// }

// getQuantityMassives()
// fillMassive();
// console.log(mainArr)


//---------
// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor". Исходную строку и символы для удаления задаёт пользователь


// function getString() { 
//   let str = prompt('enter string');
//   return str.split('');
// }
// function getSymb() {
//   const arr = []; 
//   let str = prompt('enter symbols');
//   let some = str.split('')
//   arr.push(some)
//   let arrWithSymb = arr.flat()
//   return arrWithSymb
// }

// function deleteSymb() {
//   let asd = someStr.filter((item) => !(symbols.includes(item)))
//   return asd = asd.join('')
// }

// let someStr = getString();
// let symbols = getSymb();
// let result = deleteSymb();
// console.log(result);
