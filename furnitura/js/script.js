"use strict";
import {modul} from "./modules/modul.js"
modul;


//     initReadMore();
// 
//     window.addEventListener('resize', windowResize);


//     function initReadMore() {
//         const items = document.querySelectorAll('.main-review__text');
//         console.log('ok')
//         if(items.length){
//             items.forEach(item => {
//                 setRedMore(item, item.offsetHeight > 100);
//                 console.log('ok-1', item)
                
//             });
//             }
//             function setRedMore(item, type){
//                 item.classList.add('main-review__text--hidden', type)
//                 console.log('ok-2', item)
//             }
//         } 
//     }





//Події синтаксис подій

//elem/document.addEventListener('click', myFunction, options);
//elem/document.addEventListener('click', ()=>{}, options);

// const button = document.querySelector('.button');
// button.addEventListener('click', ()=>{
// alert('Button clicked!');
// });

// const somElem = document.documentElement;
// const liHed = document.querySelector('.nav-hed__li');
// console.log(somElem);
// onclick = ()=>{

//     if (liHed) {
//         console.log('li-hed found');
//     } else {
//         console.log('li-hed not found');
//     }
// }

// const button = document.querySelector('.button');
// button.addEventListener('click', ()=>{
// button.classList.toggle('active');
// console.log('Button clicked');
// button.innerHTML === 'clik-my' ? button.innerHTML = 'my-clik' : button.innerHTML = 'clik-my'; //заміна тексту
// });

// document.addEventListener('click', (e)=>{
//     console.log(e);
//       console.log(e.target);
//         console.log(e.type);
//         if (e.target.matches('.button')) {
//          e.target.classList.toggle('active');
//         }else if (e.target.matches('.section-hed__btn')) {
//           e.target.classList.toggle('active');
//         }

// });

//Scroll
// window.addEventListener('scroll', ()=>{
//    console.log('Window scrolled');
// });

//Intersection Observer
// const sectionHed = document.querySelector('.section-hed');
// const options = {
//     root: null,
//     rootMargin: '0px 0px 0px 0px',
//     threshold: 0.3,
// };
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log('Section is in view');
//         }else{
//             console.log('Section is out of view');
//         }
//     });
// }, options);
// observer.observe(sectionHed);


// Завантаження
// window.addEventListener('load', ()=>{
//     console.log('Window loaded');
// });

// window.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM fully loaded and parsed');
// });

//Таймер
// window.addEventListener('load', ()=>{
// setTimeout(() => {
//     console.log('Window loaded');
// }, 1000);

// Інтервал
// let i = 1 ;
// let time = setInterval(() => {
//     console.log(i);
//     i === 5 ? clearInterval(time) : i++;
// }, 1000);
// });

//AJAX Запроси

// async function getData() {
//     const response = await fetch("data/info.json", {});
//      if (response.ok) {
//     const rez = await response.json();
//     initData(rez);
//      }else{
//         alert('Error fetching data');
//      }
// }
// getData();

// function initData(data) {
//     const userPlace = document.querySelector('.users-place');
// if (userPlace) {
//     data.users.forEach(element => {
//     userPlace.insertAdjacentHTML('beforeend', `<p>${element.name}, ${element.email}</p>`);
//     });
//     console.log(data);
// }
// }
// getData().then(data => initData(data));
// console.log( userPlace);

