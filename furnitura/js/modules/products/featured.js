
document.addEventListener('click', featured)
export function featured(e){
    const targetElement = e.target;
        if (targetElement.closest(".filter-products__link")) {
            e.preventDefault();
            const curentFilter = targetElement.closest(".filter-products__link");
            const activeFilter = document.querySelector(".filter-products__link--active");
            const featuredItems = document.querySelectorAll(".products-featured__items>.items-featured__product");
            const activeFilterValue = curentFilter.dataset.filterProducts;
            
            if (activeFilter && activeFilter !== curentFilter) {
               activeFilter.classList.remove("filter-products__link--active");
                console.log(activeFilter);
            }
                curentFilter.classList.add("filter-products__link--active");
                featuredItems.forEach(item => {

                    item.closest(`[class*="--${activeFilterValue}"]`) || activeFilterValue === '*' ? item.style.display = 'flex' : item.style.display = 'none'
                    // console.log(featuredItems);
            });
        }

}