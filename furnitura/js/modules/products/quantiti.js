
document.addEventListener('click', quantiti);

 export function quantiti(e){
     const  targetElement= e.target;
     const iventType = e.type;
     if(iventType === 'click'){
         if (targetElement.closest('.quantity-product__btn')) {
            e.preventDefault();
            const button = targetElement.closest('.quantity-product__btn');
            const quantiti = button.closest('.quantity-product')
            const querInput = quantiti.querySelector('.quantity-product__input');
            let value = +querInput.value;
            if(button.closest(`[class*="-place"]`)){
                console.log('++')
                ++value
            }else {
                --value
                value <= 0 ? value = 1 : null
                value >= 100 ? value = 99 : null

                console.log('--')
            }
        querInput.value = value;
        }
    }else if(iventType === 'input'){
        console.log('ok')
        if (targetElement.closest('.quantity-product__input')){
            const querInput = targetElement.closest('.quantity-product__input');
            let value = +querInput.value;
            value <= 0 ? value = 1 : null
            value >= 100 ? value = 99 : null

            querInput.value = value;
        }
    }
 }