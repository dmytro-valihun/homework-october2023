// 1
// for (let a = 10; a<=20; a++) {
//     if (a<20) {
//         document.write(`${a}, `)
//     } else {
//         document.write(`${a}.`)
//     }
// }

//2
// let qu;
// for (let a = 10; a<=20; a++) {
//     if (a < 20) {
//         qu = a * a;
//         document.write(`${qu}, `)
//     } else {
//         qu = a * a;
//         document.write(`${qu}.`)
//     }
// }

// 3
// for (let a = 1; a <= 10; a++) {
//     let result = 7 * a;
//     console.log(`7 * ${a} = ${result}`)
// }

// 4
// let num = 0;
// for (let i = 1; i <= 15; i++) {
//     num += i;
// }
// console.log(num)

// 5
// let num = 1;
// for (let i = 15; i <= 35; i++) {
//     num *= i;
// }
// console.log(num)

// 6
// let counter = 0;
// for (let i = 1; i <= 500; i++) {
//     counter +=i
// }
// console.log(counter / 500)

// 7
// let counter = 0;
// for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//         counter += i;
//     }
// }
// console.log(counter)

// 8
// let nums = '';
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//         nums += i + ' ';
//     }
// }
// console.log(nums)

// 9
// let num;
// let delitel = '';
// let chetnii = '';
// let summOfChetnDelitel = 0;
// do {
//     num = parseInt(prompt('enter integer num', ''));
// } while (isNaN(num));
// for (let i = 1; i <= num; i++) {
//     if (num === 0) {
//         alert(`no delitel`)
//         break;
//     } else if (num % i === 0){
//         delitel += i + ' ';
//         if (i % 2 === 0) {
//             chetnii += i + ' ';
//             summOfChetnDelitel += i;
//         }
//     }
// }
// console.log(delitel)
// console.log(chetnii)
// console.log(summOfChetnDelitel)

// 10
// let res;
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         let res = j * i;
//         console.log(`${i} * ${j} = ${res}`)
//     }
// }

// 11
// let num = '';
// for (let i = 20; i<= 30; i+=0.5) {
//     num += i + ' ';
// }
// console.log(num)

// 12
// let onecost = 27;
// let finalCost = '';
// for (let i = 10; i <=100; i += 10) {
//     finalCost += onecost * i + ' ';
// }
// console.log(finalCost)

// 13
// let num;
// do {
//     num = parseInt(prompt('enter integer num', ''));
// } while (isNaN(num));
// for (let i = 1; i <= 100; i++) {
//     if (i*i > num) break;
//     console.log(i)
// }

// 14
// let num;
// let counter = 0;
// do {
//     num = parseInt(prompt('enter integer num', ''));
// } while (isNaN(num));
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         counter++
//     }
// }
// if (counter > 2) {
//     console.log('ne prostoe')
// } else if (counter <= 2 && counter > 0) {
//     console.log('prostoe')
// } else {
//     console.log('ti vvel 0')
// }

// 15
// let num;
// let res;
// do {
//     num = parseInt(prompt('enter integer num', ''));
// } while (isNaN(num));
// for (let i = 1; i <= num; i++) {
//     res = 3 ** i;
//     if (res === num) break;
// }
// if (res === num) {
//     console.log('mojno')
// } else {
//     console.log('nelzia')
// }