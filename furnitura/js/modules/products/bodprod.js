

document.addEventListener('click', initSliderProducts);

export function initSliderProducts(){
    
}
sliderProduct();

 function sliderProduct(){
   
        const sliderProducts = document.querySelector('.images-product__previews');
        if(sliderProducts) {
            var swiper = new Swiper(sliderProducts, {
         
            });
            // console.log(sliderProducts, 'ok1');
        }

        const sliderMainProducts = document.querySelector('.images-product__main');
        const sliderPreviewsProducts = document.querySelector('.images-product__previews');
        if (sliderMainProducts && sliderPreviewsProducts) {
            var swiper = new Swiper(sliderPreviewsProducts, {
                slidesPerView: "auto",
                
            });
            var swiper = new Swiper(sliderMainProducts, {
                slidesPerView: 1,
                thumbs: {
                    swiper: sliderPreviewsProducts
                }
            });
          
            // console.log(sliderMainProducts);
           
        }
    }
    