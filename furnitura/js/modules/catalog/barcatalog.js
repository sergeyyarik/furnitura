
document.addEventListener('click', clikFilter);
export function clikFilter(e) {
        const targetElement = e.target
        if (targetElement.closest('.actions-catalog__filter')) {
            const filter = document.querySelector('.filter')
            console.log(filter)
            filter.classList.toggle('filter--open')

            if (filter.classList.contains('filter--open')) {
                filter.style.cssText = ``
                const filterHeight = filter.offsetHeight
                filter.style.cssText = `height: 0;`
                filter.offsetHeight
                filter.style.cssText = `height: ${filterHeight}px;`

                setTimeout(() => {
                    filter.style.cssText = ``
                }, 300);
            } else {
                const filterHeight = filter.offsetHeight
                filter.style.cssText = `height: ${filterHeight}px;`
                filter.offsetHeight
                filter.style.cssText = `height: 0;`
            }
         
        }
    const curentCatalogTitle = targetElement.closest('.item-filter__title');
    if (curentCatalogTitle) {
        const currentCatalogBody = targetElement.closest('.item-filter__title').nextElementSibling;
        const currentCatalog = curentCatalogTitle.parentElement;
            e.preventDefault();
           currentCatalog.classList.toggle('item-filter--open');
           if (!currentCatalog.open) {
               currentCatalog.open = true;
            const currentCatalogBodyHeight = currentCatalogBody.offsetHeight;
               // currentCatalog.classList.add('item-filter--open')
               currentCatalogBody.style.cssText = `height: 0;`
               currentCatalogBody.offsetHeight
               currentCatalogBody.style.cssText = `height: ${currentCatalogBodyHeight}px;`
               console.log(e.target)
           } else {
               const currentCatalogBodyHeight = currentCatalogBody.offsetHeight;
               // currentCatalog.classList.remove('item-filter--open')
               currentCatalogBody.style.cssText = `height: ${currentCatalogBodyHeight}px;`
               currentCatalogBody.offsetHeight
               currentCatalogBody.style.cssText = `height: 0;`
               setTimeout(() => {
                   currentCatalog.open = false;
                   currentCatalogBody.style.cssText = ``
               }, 500);
           }
}
}
initFilterSpollers();
initFilter();
 function initFilter() {
        const filter = document.querySelector('.filter')
        if (filter) {   
            const matchMedia = window.matchMedia(`(width <= 56.875em)`)
            matchMedia.addEventListener('change', function () {
                setFilter(matchMedia.matches)
            })
            setFilter(matchMedia.matches)
            function setFilter() {
                if (matchMedia.matches) {
                    const bodyMobaileFilter = document.querySelector('.body-catalog__filter-mobile')
                    bodyMobaileFilter.insertAdjacentElement('beforeend', filter)
                    filter.style.cssText = `height: 0;`
                   
                } else {
                  const catalogMain = document.querySelector('.catalog__main')
                    catalogMain.insertAdjacentElement('afterbegin', filter)
                    filter.style.cssText = ``
                    const filterHeight = filter.offsetHeight
                    filter.offsetHeight
                    filter.style.cssText = `height: ${filterHeight}px;`
                }
            }
            
        } 
    
} 
function initFilterSpollers() {
        const filterSpollers = document.querySelectorAll('.item-filter[open]')
        if (filterSpollers.length) {
            filterSpollers.forEach(filterSpoller => {
                filterSpoller.classList.add('item-filter--open')
            });
        }

          const slider = document.getElementById('slider');
    const sliderValueElement = document.querySelectorAll('.price-filter__info span');
    if (slider){
        noUiSlider.create(slider, {
            start: [0, 40000],
            connect: true,
            range: {
                'min': 0,
                'max': 100000
            }
        });7
    

        slider.noUiSlider.on('update', function (values) {
            sliderValueElement[0].innerHTML = Math.round(values[0])
            sliderValueElement[1].innerHTML = Math.round(values[1])
            // sliderValueElement.innerHTML = values.join(' - ');
        });
    }

    } 
