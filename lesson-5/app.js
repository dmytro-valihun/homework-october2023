// const arr = [];
// let length;
// let element;
// do {
//     length = +prompt('how many elements', '')
// } while (isNaN(length) || length === 0);
// for (let i = 0; i < length; i++) {
//     do {
//         element = +prompt(`enter element #${i+1}`, '');
//     } while (isNaN(element));
//     arr.push(element);
// }
// console.log(arr)
// arr.sort((a, b) => a - b);
// console.log(arr)
// arr.splice(2, 3)
// console.log(arr)







// Найти сумму нечетных положительных элементов.
// Найти произведение положительных элементов.
// Найти наибольший среди элементов массива, остальные обнулить.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let summPosit = 0;
let quantitPosit = 0;
let min = Infinity;
let max = -Infinity;
let indexMin;
let indexMax;
let otricateln = 0;
let nechetnie = 0;
let chetnie = 0;
let sumChetnie = 0;

for (let i = 0; i < arr.length; i++) {
    // Найти сумму и количество положительных элементов.
    if (arr[i] > 0) {
        quantitPosit++;
        summPosit += i;
    }
    // Найти минимальный элемент массива и его порядковый номер.
    if (arr[i] < min) {
        min = arr[i];
        indexMin = i;
    }
    // Найти максимальный элемент массива и его порядковый номер.
    if (arr[i] > max) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > max) {
                max = arr[j];
                indexMax = j;
            }
        }
    }
    // Определить количество отрицательных элементов.
    if (arr[i] < 0) {
        otricateln++;
    }
    // Найти количество нечетных положительных элементов.
    if (arr[i] % 2 !== 0 && arr[i] > 0) {
        nechetnie++;
    }
    // Найти количество четных положительных элементов.
    if (arr[i] % 2 === 0 && arr[i] > 0) {
        chetnie++;
    }
    // Найти сумму четных положительных элементов.
    if (chetnie > 1) {
        sumChetnie += sumChetnie;
    }
    // Найти наибольший среди элементов массива, остальные обнулить.
    if (max > arr[i]) {
        arr[i] = 0;
    }
}

// console.log(`summ = ${summPosit}, quantity of posit = ${quantitPosit}`)
// console.log(min, indexMin)
// console.log(max, indexMax)
console.log(arr)