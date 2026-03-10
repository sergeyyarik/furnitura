 // burger---------------
     export  const burger = onclick =(e)=>{
         const targetElement = e.target;
         if (targetElement.closest('.btn--burger')) {
            e.preventDefault();
            console.log('Menu toggle');
            document.documentElement.toggleAttribute('data-menu-open');
        }
    }

//submenu----------------------------------
 export   function initSubMenu() {
        const matchMedia = window.matchMedia(`(width <= 41.875em)`)
        const subMenu = document.querySelector('.sub-menu')
        matchMedia.addEventListener('change', function () {
            setSubMenu(matchMedia.matches)
        });
        setSubMenu(matchMedia.matches);

        function setSubMenu() {
            if (matchMedia.matches) {
                subMenu.style.cssText += `height: 0;`
            } else {
                subMenu.style.cssText = ``
            }
        };
    }
document.addEventListener('click', submenu);
export function submenu(e){
    const targetElement = e.target;
    if (targetElement.closest('.menu__link-btn--icon-vector')) {
        e.preventDefault();
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

}

//heder-scrol---------------------------------------------
    window.addEventListener('scroll', windowScroll);
    const header = document.querySelector(".header");
   export function windowScroll() {
        if (scrollY > 10) {
            header.classList.add("header--scrol");
        } else {
            header.classList.remove("header--scrol");
        }
    }

//

