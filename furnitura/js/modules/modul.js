import { burger, initSubMenu, windowScroll, submenu} from './headers/heder.js';
import { featured } from './products/featured.js'
import { load } from './mobload.js';
import { sliderReview } from './products/slidrev.js';
import { initFooterMenus} from './footer/footer.js';
import { clikFilter} from './catalog/barcatalog.js';
import { initSliderProducts } from './products/bodprod.js';
import { quantiti } from './products/quantiti.js';
import { descript } from './products/descript.js';



export function modul(){
    windowScroll;
    initSubMenu;
    burger;
    load;
    featured;
    submenu;
    sliderReview;
    clikFilter;
    quantiti;
    descript;
    initSliderProducts;
    initFooterMenus;
}