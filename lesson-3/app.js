// 1
// const firstNum = parseInt(prompt('enter first num', ''));
// const secondNum = parseInt(prompt('enter second num', ''));
// if (firstNum > secondNum) {
//     console.log(`${firstNum} > ${secondNum}`)
// } else if (firstNum < secondNum){
//     console.log(`${firstNum} < ${secondNum}`)
// } else {
//     console.log(`${firstNum} = ${secondNum}`)
// }

// 2
// let firstNum = parseInt(prompt('enter first num - km', ''));
// let secondNum = parseInt(prompt('enter second num - foots', ''));
// firstNum *= 1000;
// secondNum *= 305;
// if (firstNum > secondNum) {
//     console.log(`${firstNum} > ${secondNum}`)
// } else if (firstNum < secondNum){
//     console.log(`${firstNum} < ${secondNum}`)
// } else {
//     console.log(`${firstNum} = ${secondNum}`)
// }

// 3
// const firstNum = parseInt(prompt('enter first num', ''));
// const secondNum = parseInt(prompt('enter second num', ''));
// if (isNaN(firstNum) || isNaN(secondNum)) {
//     console.log(`try again`)
// } else {
//     if (!firstNum || !secondNum) {
//         console.log(`you have 0`)
//     } else {
//         if (firstNum % secondNum === 0) {
//             console.log(`${firstNum} is delitel ${secondNum}`)
//         } else if (secondNum % firstNum === 0) {
//             console.log(`${secondNum} is delitel ${firstNum}`)
//         } else {
//             console.log(`no delitel`)
//         }
//     }
// }

// 4
// const firstNum = +prompt('enter first num', '');
// const result = firstNum % 2;
// if (result === 0) {
//     console.log(`chetnoe`)
// } else {
//     console.log(`ne chetnoe`)
// }
// const lastNum = firstNum % 10;
// console.log(lastNum)

// 5
// const num = +prompt('enter first num', '');//56
// let num1 = num % 10; //6
// let num2 = (num - num1) / 10 ; //5
// console.log(num2, num1)



// Спросить пользователя год его рождения.

// Спросить у него, в каком городе он живет.

// Спросить его любимый вид спорта.

// При нажатии на ОК показываем ему окно, где должна быть отображена следующая информация:

// Его возраст.

// Если пользователь введет Киев, Вашингтон или Лондон, то показать ему сообщение – “Ты живешь в столице …” и на место точек подставляем  название страны, столицей которой является город, который ввел пользователь. Иначе показываем ему “ты живешь в городе …” и на место точек – введенный город.

// Выбираем сами три вида спорта и три чемпиона в этих видах. Соответственно, если пользователь введет один из этих видов спорта, то показываем ему сообщение “Круто! Хочешь стать …?” и подставляем на место точек имя и фамилию чемпиона.

// Всё это должно быть отображено в одном окне (алерте).

// Если в каком-то из случаев он не захочет вводить информацию и нажмет "Отмена", показать ему сообщение – “Жаль, что Вы не захотели ввести свой(ю) …” и указываем, что он не захотел вводить – дату рождения, город или вид спорта.


// let age = +prompt('twoj god rojdenia', '');
// if (!age) {
//     alert(`zhal`)
// }
// let city = prompt('where are you living?', '');
// if (!city) {
//     alert(`zhal`)
// }
// let sport = prompt('what your favourite sport?', '');
// if (!sport) {
//     alert(`zhal`)
// }
// switch (city) {
//     case 'kiev' || 'vashington' || 'london':
//         alert(`you live in the capital in ${city}`)
//         break;
//     default:
//         alert(`you live in ${city}`)
// }
