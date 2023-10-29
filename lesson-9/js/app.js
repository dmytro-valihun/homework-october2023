// Имеется текстовое поле на странице. При фокусировке на этом поле сбоку появляется <div> с информацией. При пропаже фокуса - <div> так же пропадает
// const input = document.querySelector('.text');
// const main = document.querySelector('.main');
// input.addEventListener('focus', showDiv);
// input.addEventListener('blur', dellD)
// function showDiv() {
//     const div = document.createElement('div');
//     div.className = 'some'
//     div.textContent = 'some info bla bla bla';
//     if (main.children.length > 1) {
//         document.querySelector('.some').remove()
//     } else {
//         main.appendChild(div)
//     }

// function dellD() {
//     document.querySelector('.some').remove()
// }

// ----------------
// На странице есть две кнопки. При клике на первую кнопку просим пользователя ввести в prompt ссылку, 
// при клике на вторую - переадресовывается на другой сайт (по ранее введенной ссылке). 
// Реализовать проверку на http / https. Если протокол не указан - добавляем

// const leftBtn = document.querySelector('.left');
// const rightBtn = document.querySelector('.right');
// let link;

// leftBtn.addEventListener('click', getLink);
// rightBtn.addEventListener('click', goToNewLink);

// function getLink() {
//     do {
//         link = prompt('enter your link', '');
//         if (link === null || typeof link === 'undefined') return;
//         link = link.trim()
//     } while (link === '');
//     const finishLink = checkLink(link);
//     return link = finishLink;
// }

// function checkLink(link) {
//     const notSecure = 'http://';
//     const secure = 'https://';
//     if (link.startsWith(notSecure) || link.startsWith(secure)) {
//         return link
//     } else { 
//         link = secure + link;
//     }
//     return link
// }

// function goToNewLink() {
//     if (typeof link === 'undefined' || link === null) {
//         return
//     } else {
//         window.location = link;
//     }
// }


// ------------
// В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вывести изображение из этой папки полученное случайным образом (Math.random)

// const imgDiv = document.querySelector('.img');

// function showImg() {
//     const way = './img/';
//     // const result = Math.floor(Math.random() * 9) + 1;
//     const result = randomInteger(1, 9);

//     imgDiv.setAttribute('src', `${way}${result}.jpg`);
// }
// showImg();
// ----------------------*******
// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// ------*******
// let arr = [1, 4, 55, 666]
// let secArr = [2, 4, 55]

// let result = arr.filter(item => secArr.includes(item))
// console.log(result)
// --------*********
// navigator.geolocation.getCurrentPosition(function(myGeolocation) {
//     console.log(myGeolocation)
// })
//----------********
