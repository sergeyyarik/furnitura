document.addEventListener('click', sliderReview);
export function sliderReview(e){
const targetElement = e.target;
        if (targetElement.closest('.slider-reviews__btn')){
            e.preventDefault();
            const curentBtn = targetElement.closest('.slider-reviews__btn');
            const activeBtn = document.querySelector('.slider-reviews__btn--active');
            const offSlider = document.querySelector('.slider-reviews__slider');
            const sliderItems = document.querySelectorAll('.slider-reviews__btn');
            const cartSlid = document.querySelector('.slider-reviews__cart').offsetWidth;
            const activeSlidValue = curentBtn.dataset.filterSlid;
            let offset =0;
            console.log(cartSlid)
            if (activeBtn && activeBtn !== curentBtn) {
                curentBtn.classList.add("slider-reviews__btn--active");
                activeBtn.classList.remove("slider-reviews__btn--active");
                sliderItems.forEach(item =>{
                    if (item === curentBtn && activeBtn){
                        if (activeSlidValue === 'slid1' || "--slid1"){
                            offSlider.style.left = offset + '%';
                        }
                    } else if (activeSlidValue === 'slid2') {
                        offset += 10;
                        offSlider.style.left = -offset + '%';
                        console.log(cartSlid)
                    } else if (activeSlidValue === 'slid3') {
                        offset += 28;
                        offSlider.style.left = -offset + '%';
                    }
                    else if (activeSlidValue === 'slid4') {
                        offset -= 38;
                        offSlider.style.left = -offset + '%' ;

                    }
                })
            }


        }
    }

