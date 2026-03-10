
document.addEventListener('click', initFooterMenus)

  export  function initFooterMenus(e) {
        const footerMenus = document.querySelectorAll('.body-footer__list')
        if (footerMenus.length) {
            const matchMedia = window.matchMedia(`(width <= 36.25em)`)
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

        //  e.preventDefault();
        const targetElement = e.target
            if (targetElement.closest('.body-footer__title')) {
                const currentTitle = targetElement.closest('.body-footer__title')
                const currentList = currentTitle.nextElementSibling
                if (window.innerWidth <= 580) {
                    const activeFooterMenu = document.querySelector('[data-futmenu-open]')

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
  