console.log('Hello world!');

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 
// const items = document.querySelectorAll('.item');
// items.forEach(item => {
//     item.addEventListener('click', () => {
//         item.classList.toggle('active');
//     });
// });


// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.
// window.addEventListener('load', () => {
//     setTimeout(() => {
//         document.body.classList.add('loaded');
// }, 1000);
// });


// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
// const header = document.querySelector('header');
// const footer = document.querySelector('footer');
// header.addEventListener('mouseenter', () => {
//     footer.style.backgroundColor = 'red';
// });
// header.addEventListener('mouseleave', () => {
//     footer.style.backgroundColor = '';
// });


// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
    // const item = document.querySelector('.item');
    // Отримуємо налаштування з дата-атрибуті
    // const limit = parseInt(item.dataset.limit) || 10;
    // Функція, що запускає інтервал
    // const startInterval = () => {
    //     let current = 1;
    //     item.textContent = current;
        // item.style.fontSize = "40px";
        // item.style.color = "green";
        // item.style.fontWeight = 600;
    //     const intervalId = setInterval(() => {
    //         current++;
    //         item.textContent = current;
    //         if (current >= limit) {
    //             clearInterval(intervalId);
    //         }
    //     }, 1000);
    // };
    // Налаштування Observer
    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             startInterval();
    // Припиняємо спостереження
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, { threshold: 0.3 }); 
    // observer.observe(item);
"use strict";

//Віключення ховера в мобільних пристроях
window.addEventListener(`load`, load);
function load() {
    /* Перевірка мобільного браузера */
    const isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
    /* Додавання класу touch для HTML, якщо браузер мобільний */
    function addTouchAttr() {
        // Додавання data-fls-touch для HTML, якщо браузер мобільний
        if (isMobile.any()) document.documentElement.setAttribute('data-fls-touch', '')
    }

    function initSubMenu() {
        const matchMedia = window.matchMedia(`(width <= 41.875rem)`)
        const subMenu = document.querySelector('.sub-menu')
        matchMedia.addEventListener('change', function () {
            setSubMenu(matchMedia.matches)
        })
        setSubMenu(matchMedia.matches)

        function setSubMenu() {
            if (matchMedia.matches) {
                subMenu.style.cssText += `height: 0;`
            } else {
                subMenu.style.cssText = ``
            }
        }
    }
    // Меню футера

    function initFooterMenus() {
        const footerMenus = document.querySelectorAll('.body-footer__list')
        if (footerMenus.length) {
            const matchMedia = window.matchMedia(`(width <= 36.0625em)`)
            matchMedia.addEventListener('change', function () {
                setFooterMenus(matchMedia.matches)
            })
            function setFooterMenus() {
                footerMenus.forEach(footerMenu => {
                    if (matchMedia.matches) {
                        footerMenu.style.cssText += `height: 0;`
                    } else {
                        footerMenu.style.cssText = ``
                    }
                })
            }
            setFooterMenus()
        }
    }
    initFooterMenus()
    addTouchAttr()
    initSubMenu()

    //Підменю

    document.addEventListener('click', documentActions)
    function documentActions(e) {
        const targetElement = e.target
        if (isMobile.any()) {
            if (targetElement.closest('.menu__link-btn--icon-vector')) {
                const subMenu = document.querySelector('.sub-menu')
                document.documentElement.toggleAttribute('data-submenu-open')
                if (window.innerWidth <= 670) {
                    if (document.documentElement.hasAttribute('data-submenu-open')) {
                        // open
                        subMenu.style.cssText = ``
                        const subMenuHeight = subMenu.offsetHeight
                        subMenu.style.cssText += `height: 0;`
                        subMenu.offsetHeight
                        subMenu.style.cssText = `height: ${subMenuHeight}px`
                       
                    } else {
                        // close
                        subMenu.style.cssText += `height: 0;`
                      
                    }
                }
            } else {
                document.documentElement.removeAttribute('data-submenu-open')
            }
            if (targetElement.closest('.body-footer__title')) {
                const currentTitle = targetElement.closest('.body-footer__title')
                const currentList = currentTitle.nextElementSibling
                if (window.innerWidth <= 550) {
                    const activeFooterMenu = document.querySelector('[data-futmenu-open]')
                    // console.log(futIcon);
                    if (activeFooterMenu && activeFooterMenu !== currentTitle) {
                        closeActiveFooterMenu(activeFooterMenu)

                    }

                    currentTitle.toggleAttribute('data-futmenu-open')
                    if (currentTitle.hasAttribute('data-futmenu-open')) {
                        currentList.style.cssText = ``
                        const currentListHeight = currentList.offsetHeight
                        currentList.style.cssText = `height: 0;`
                        currentList.offsetHeight
                        currentList.style.cssText = `height: ${currentListHeight}px`
                       
                    } else {
                        currentList.style.cssText = `height: 0;`
                        document.documentElement.removeAttribute('data-futmenu-open')
                    }

                    function closeActiveFooterMenu(item) {
                        item.removeAttribute('data-futmenu-open')
                        const currentList = item.nextElementSibling
                        currentList.style.cssText = `height: 0;`
                    }
                }
            }
        }
        // if (targetElement.closest('.--icon-vector')) {
        //     document.documentElement.toggleAttribute('data-menu-open')
        // }
    }
}

//     document.addEventListener('click', (e) => {
//         const targetElement = e.target;
//         if (isMobile.any()) {
//             if (targetElement.closest('.menu__link-btn--icon-vector')) {
//                 const submenu = document.querySelector('.sub-menu');
//                 document.documentElement.toggleAttribute('data-submenu-open');
//                 if (window.innerWidth <= 668) {
//                     if (document.documentElement.hasAttribute('data-submenu-open')) {
//open
//                         submenu.style.cssText = ``;
//                         const submenuHeight = submenu.offsetHeight;
//                         submenu.style.cssText += `
//                     height:0; `;
//                         submenu.offsetHeight; //перезапуск анімації
//                         submenu.style.cssText += `
//                     height: ${submenuHeight}px;`;

//                     } else {
//close
//                         submenu.style.cssText += `
//                     height:0;`;
//                     }

//                     console.log('Submenu toggle');
//                 }
//             } else {
//                 document.documentElement.removeAttribute('data-submenu-open');
// submenu.style.cssText += `
//     height:0;`;
//             }

// if (targetElement.closest(".body-footer__title")){
//     const menuFuter = document.querySelector(".body-footer__list");
//     document.documentElement.toggleAttribute('data-futmenu-open');
//     if (window.innerWidth <= 550){
//         if (document.documentElement.hasAttribute('data-futmenu-open')){
//                 //open                        
//              menuFuter.style.cssText = ``;
//                 const futmenuHeight = menuFuter.offsetHeight;
//                 menuFuter.style.cssText += `
//                 height:0; `;
//                 menuFuter.offsetHeight; //перезапуск анімації
//                 menuFuter.style.cssText += `
//                 height: ${futmenuHeight}px;`;

//         } else {
//             //close
//             menuFuter.style.cssText += `
//         height:0;`;
//         }
//     }
// } else {
//     document.documentElement.removeAttribute('data-submenu-open');
//     // submenu.style.cssText += `
//     //     height:0;`;
// }
//         }
//     });
// }
//Меню футер
// document.addEventListener('click', (e)=>{
//     const targetElement = e.target;
//     const menuFuter = document.querySelectorAll(".body-footer__list");
//     if(menuFuter.length){
//         if (targetElement.closest('.body-footer__title')){
//             if(window.innerWidth <= 550){
//                 document.documentElement.toggleAttribute('data-futmenu-open');
// menuFuter.forEach(futerMenu => {
//                     if (document.documentElement.hasAttribute('data-futmenu-open')){
//                         if(targetElement !== menuFuter){
//                         const curentElement = targetElement.closest('.body-footer__title').nextElementSibling;
// console.log(futerMenu);
//                             if(window.innerHeight ===0){
//                                 curentElement.style.cssText = ``;
//                                 const curentElementHeight = curentElement.offsetHeight;
//                                 curentElement.style.cssText += `
//                                 height:0; `;
//                                 curentElement.offsetHeight; //перезапуск анімації
//                                 curentElement.style.cssText += `
//                                 height: ${curentElementHeight}px;`;
//                             } else {
//close
//                                 curentElement.style.cssText += `
//                                 height:0;`;
//                             }
//                         }     
//                     };
// });
//                 console.log(e.value);
//             }
//         }
//     }
// function initFuterMenu(e) {
// });
//     if(menuFuter.length){
//         menuFuter.forEach(futerMenu => {

//             console.log(futerMenu[i]);

//         });
//     }

// }
// initFuterMenu();

// document.addEventListener('click', documentFooter);
// function documentFooter(e){

// }
// document.addEventListener('click', documentFootActions);
// function documentFootActions(e) {
//     const targetElement = e.target;
//     if(window.innerWidth <= 550){
//     if (targetElement.closest('.title-footer--icon-vector')) {
//            document.documentElement.toggleAttribute('data-futmenu-open');
//         console.log(e.target);
//     }
//     }
// }
// Меню бургер
document.addEventListener('click', documentActions);
function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.btn--burger')) {
        document.documentElement.toggleAttribute('data-menu-open');
        console.log('Menu toggle');
    }
}

// document.addEventListener('click', (e)=>{
// const targetFut= e.target;
//     if (targetFut.closest('.title-footer--icon-vector')){
//         document.documentElement.toggleAttribute('data-futmenu-open');
//         // targetFut.classList.add('futopen');
//     }else {
//         targetFut.classList.remove('futopen');  
//     }
// })

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

