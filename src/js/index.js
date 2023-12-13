import Swiper from 'swiper';
import  {Pagination}  from 'swiper/modules';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination.scss';
import '../scss/fonts.scss'
import '../scss/style.scss'

//Кнопки
function buttonSlider(placeOfModification,newMod,icon,text,textContent){
  placeOfModification.classList.toggle(newMod)
  icon.classList.toggle('read-more__icon--active')
  text.textContent = icon.classList.contains('read-more__icon--active') ? textContent :'Показать все'
}

const aboutWrapper = document.querySelector('.about__wrapper')
const textParagraf = aboutWrapper.querySelector('.text__paragraf--v2')
const aboutButton = aboutWrapper.querySelector('.read-more__button')
const aboutButtonIcon = aboutButton.querySelector('.read-more__icon');
const aboutButtonText = aboutButton.querySelector('.read-more__text');

aboutButton.addEventListener('click', () => { buttonSlider(textParagraf,'text__paragraf--more',aboutButtonIcon,aboutButtonText,'Читать далее') })

const brands = document.querySelector('.brands');
const wrapperBrands = brands.querySelector('.brands__wrapper');
const brandsButton = brands.querySelector('.read-more__button')
const brandsIcon = brandsButton.querySelector('.read-more__icon');
const brandsText = brandsButton.querySelector('.read-more__text');

brandsButton.addEventListener('click', () => { buttonSlider(wrapperBrands,'brands__wrapper--more',brandsIcon,brandsText,'Скрыть') })

const tech = document.querySelector('.tech');
const wrapperTech = tech.querySelector('.tech__wrapper');
const techButton = tech.querySelector('.read-more__button')
const techIcon = techButton.querySelector('.read-more__icon');
const techText = techButton.querySelector('.read-more__text');

techButton.addEventListener('click', () => { buttonSlider(wrapperTech,'tech__wrapper--more',techIcon,techText,'Скрыть') })

//aside
let header = document.querySelector('.header')
let headerButton = header.querySelector('.header__button')
let asideHeader = document.querySelector('.aside__header')
let asideHeaderButton = asideHeader.querySelector('.aside__button')

let site = document.querySelector('.site')
let aside = document.querySelector('.aside')
let asideFogOfWar = aside.querySelector('.aside__fogOfWar')
function burger(){
  aside.classList.toggle('aside--burger')
  site.classList.toggle('site--fogOfWar')
  asideFogOfWar.classList.toggle('aside__fogOfWar--open')
}

headerButton.addEventListener("click", burger)
asideHeaderButton.addEventListener("click", burger)
asideFogOfWar.addEventListener("click", burger)

//modal
let modal = document.querySelector('.modal')
let modalFeedback = modal.querySelector('.modal__feedback')
let modalCall = modal.querySelector('.modal__call')
let modalFogOfWar = modal.querySelector('.modal__fogOfWar')


function call(modalTipe,tipe){
  modal.classList.add('modal--open')
  modalTipe.classList.add('modal__'+tipe+"--open")
  modalFogOfWar.classList.add('modal__fogOfWar--open')
  if(aside.classList.contains('aside--burger')){}else{site.classList.add('site--fogOfWar')}
}
function close(){
  modal.classList.remove('modal--open')
  modalFeedback.classList.remove('modal__feedback--open')
  modalCall.classList.remove('modal__call--open')
  modalFogOfWar.classList.remove('modal__fogOfWar--open')
  if(aside.classList.contains('aside--burger')){}else{site.classList.remove('site--fogOfWar')}
}
for(let element of [ [header,'.header__action-buttoms'],[aside,'.contact__action-buttoms'] ]){
  const actionItem = element[0].querySelector(element[1]).children
  actionItem[1].addEventListener('click', () => { call(modalFeedback,'feedback') })
  actionItem[0].addEventListener('click', () => { call(modalCall,'call') })
}

let modalCloseButton = modal.querySelector('.modal__close-button')
modalCloseButton.addEventListener('click', close)
modalFogOfWar.addEventListener('click', close)

//Навигация
let navItems = document.querySelector('.nav__items');
let navItem = navItems.children
let addCheckHandler = function (item) {
  item.addEventListener('click', function () {

    let i = 0
    while (i< navItem.length){
      if(navItem[i].classList.contains('nav__item--active'))  navItem[i].classList.toggle('nav__item--active');  //include:contains?
      i++
    }

    item.classList.add('nav__item--active')
  });
};
for (let i = 0; i < navItem.length; i++) {
  addCheckHandler(navItem[i]);
}

//swiper
let swiper = new Swiper('.swiper', {
            
        direction: 'horizontal',
        loop: true,
        freeMode:true,
        centeredSliders:true,
        spaceBetween: 16,
        slidesPerView: "auto",
        updateOnWindowResize: true,
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        breakpoints: {
            768: {      
                spaceBetween: 0,
                enabled: false,
                
            },            
        },            
})