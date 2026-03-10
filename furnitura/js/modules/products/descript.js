document.addEventListener('click', descript);

function idexInParent(parent, element){
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
}

export function descript(e){
const elementTarget = e.target;
 if(elementTarget.closest('.description-product__button')){
     e.preventDefault();
     const curentBtn = elementTarget.closest('.description-product__btn');
     if (!curentBtn.closest('[class*=--active]')){
        const curentElembtn = curentBtn.parentElement;
        const curentList = curentElembtn.parentElement;
         const curenElement = document.querySelectorAll('.items-description');
        const activeBtn = document.querySelector('.description-product__btn--active');
        const activElement = document.querySelector('.items-description--active');
         const curentIndex = idexInParent(curentList, curentElembtn);
         curentBtn.classList.add('description-product__btn--active');
         activeBtn.classList.remove('description-product__btn--active');       
         if (curenElement !== '[class*=--active]'){
             curenElement[curentIndex].classList.add('items-description--active');
             activElement.classList.remove('items-description--active');
         } 
 }
} 
}