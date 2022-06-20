(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {

      if (support == true) {
         document.querySelector('html').classList.add('webp');
      } else {
         document.querySelector('html').classList.add('no-webp');
      }
   });
})()

$(function () {
   $.scrollify({
      section: ".section",
      scrollSpeed: 1400,
      overflowScroll: true,
      offset: 0,
      updateHash: false,
      interstitialSection: "footer",
   });
});

// Объявление переменных
const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const burger = document.querySelector('.header-burger__button');
const menu = document.querySelector('.menu'); // Выезжаюзщее меню
const headerRight = document.querySelector('.header__right') // Для получения цвета левой части меню
const headerLeft = document.querySelector('.header__left') // Для получения цвета левой части меню
const headerLeftCss = getComputedStyle(headerLeft) // Для получения цвета левой части меню

// Секции 
const start = document.querySelector('.start') // Первый блок
const jump = document.querySelector('.jump') // Второй блок
const president = document.querySelector('.president') // Третий блок
const principles = document.querySelector('.principles') // Четвертый блок
const expertise = document.querySelector('.expertise') // Пятый блок
const vitra = document.querySelector('.vitra') // Шестой блок
const group = document.querySelector('.group') // Седьмой блок
const presentation = document.querySelector('.presentation') // Восьмой блок
const team = document.querySelector('.team') // Девятый блок
const footer = document.querySelector('.footer') // Футер
const footerHeight = parseInt(getComputedStyle(footer).height); // Высота футера

// Координаты
let headerCss = window.getComputedStyle(header);
let startCoord = start.getBoundingClientRect().top;              // Получение позиции блока относительно позиции скролла 
let jumpCoord = jump.getBoundingClientRect().top;                // Получение позиции блока относительно позиции скролла 
let presidentCoord = president.getBoundingClientRect().top;      // Получение позиции блока относительно позиции скролла 
let principlesCoord = principles.getBoundingClientRect().top;      // Получение позиции блока относительно позиции скролла 
let expertiseCoord = expertise.getBoundingClientRect().top;      // Получение позиции блока относительно позиции скролла 
let vitraCoord = vitra.getBoundingClientRect().top;      // Получение позиции блока относительно позиции скролла 
let groupCoord = group.getBoundingClientRect().top;      // Получение позиции блока относительно позиции скролла 
let presentationCoord = presentation.getBoundingClientRect().top;      // Получение позиции блока относительно позиции скролла 
let teamCoord = team.getBoundingClientRect().top;      // Получение позиции блока относительно позиции скролла 
let footerCoord = footer.getBoundingClientRect().top;      // Получение позиции блока относительно позиции скролла 

// Смена стилей меню
function changeMenuStyles(a) {
   if (a < jumpCoord) { // Первый блок
      header.classList.remove("jump__page")
      header.classList.add("start__page")

      headerLeft.classList.remove("dark")
      headerRight.classList.remove("dark")
      menu.classList.remove("dark")
   } else if (a >= jumpCoord && a < presidentCoord) { // Второй блок
      header.classList.remove("start__page")
      header.classList.remove("president__page")
      header.classList.add("jump__page")

      headerLeft.classList.add("dark")
      headerRight.classList.add("dark")
      menu.classList.add("dark")
   } else if (a >= presidentCoord && a < principlesCoord) { // Третий блок
      header.classList.remove("jump__page")
      header.classList.remove("principles__page")
      header.classList.add("president__page")

      headerLeft.classList.remove("dark")
      headerRight.classList.remove("dark")
      menu.classList.remove("dark")
   } else if (a >= principlesCoord && a < expertiseCoord) { // Четвертый блок
      header.classList.remove("president__page")
      header.classList.remove("expertise__page")
      header.classList.add("principles__page")

      headerLeft.classList.remove("dark")
      headerRight.classList.add("dark")
   } else if (a >= expertiseCoord && a < vitraCoord) { // Пятый блок
      header.classList.remove("principles__page")
      header.classList.remove("vitra__page")
      header.classList.add("expertise__page")

      headerLeft.classList.add("dark")
      headerRight.classList.add("dark")
      menu.classList.add("dark")
   } else if (a >= vitraCoord && a < groupCoord) { // Шестой блок
      header.classList.remove("expertise__page")
      header.classList.remove("group__page")
      header.classList.add("vitra__page")

      headerLeft.classList.remove("dark")
      headerRight.classList.add("dark")
      menu.classList.remove("dark")
   } else if (a >= groupCoord && a < presentationCoord) { // Седьмой блок
      header.classList.remove("vitra__page")
      header.classList.remove("presentation__page")
      header.classList.add("group__page")

      headerLeft.classList.add("dark")
      headerRight.classList.add("dark")
      menu.classList.add("dark")
   } else if (a >= presentationCoord && a < teamCoord) { // Восьмой блок
      header.classList.remove("group__page")
      header.classList.remove("team__page")
      header.classList.add("presentation__page")

      headerLeft.classList.add("dark")
      headerRight.classList.remove("dark")
      menu.classList.add("dark")
   } else if (a >= teamCoord && a < (teamCoord + footerHeight)) { // Девятый блок
      header.classList.remove("presentation__page")
      header.classList.remove("footer-hidden")
      header.classList.add("team__page")

      headerLeft.classList.remove("dark")
      headerRight.classList.add("dark")
      menu.classList.remove("dark")
   } else if (a >= (teamCoord + footerHeight)) { // Футер
      header.classList.add("footer-hidden")
   }
}
// Вкл/Выкл скролла
function EnableScrollify() {
   if ((!($.scrollify.isDisabled()))) {
      $.scrollify.disable();
   } else {
      $.scrollify.enable();
   }
}
// Бургер
function workBurger() {
   burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      body.classList.toggle("lock");
      menu.style.backgroundColor = headerLeftCss.backgroundColor; // Для изменения цвета выплывающего меню
      EnableScrollify()
   })
}
// Функция смены языков
function switchLanguage() {
   const langs = document.querySelectorAll('.langs');
   langs.forEach(item => {
      item.addEventListener("click", function (e) {
         if (e.target.closest(".header-langs__item") || e.target.closest(".menu-column__list_lang")) {
            let items = document.querySelectorAll('.header-langs__item');
            items.forEach(item => {
               item.classList.remove("active")
            })
            e.target.classList.add("active");
            html.lang = e.target.id;
         }
      })
   })
}
// Скролл в секции "group"
function scrollInGroupSection() {
   const scrollItem = document.querySelector('.group-main__list');
   scrollItem.addEventListener("wheel", (event) => {
      event.preventDefault();
      let delta = event.deltaY || event.detail || event.wheelDelta;
      scrollItem.scroll({
         top: scrollItem.scrollTop + delta,
         left: 0,
         behavior: 'auto'
      })
   })
   scrollItem.addEventListener("mouseenter", (event) => {
      $.scrollify.disable();
   })
   scrollItem.addEventListener("mouseleave", (event) => {
      $.scrollify.enable();
   })
}
// Слайдер
function slider(sliderClass, sliderWrapperClass, buttonPrevClass, buttonNextClass, counterClass) {
   const slider = document.querySelector(`.${sliderClass}`)
   const sliderWrapper = document.querySelector(`.${sliderWrapperClass}`)
   const btnNext = document.querySelector(`.${buttonNextClass}`);
   const btnPrev = document.querySelector(`.${buttonPrevClass}`);
   const counter = document.querySelector(`.${counterClass} span`)
   let x = 0;
   slider.addEventListener("click", function (e) {
      if (e.target.closest(`.${buttonPrevClass}`)) {
         if (x < 0) {
            x += 100;
            counter.innerHTML--
         }
      }
      if (e.target.closest(`.${buttonNextClass}`)) {
         if (x > -(100 * (sliderWrapper.children.length - 1))) {
            x -= 100;
            counter.innerHTML++;
         }
      }
      if (x == 0) {
         btnPrev.classList.add("active");
      }
      if (x !== 0 && x > -(100 * (sliderWrapper.children.length - 1))) {
         btnPrev.classList.remove("active");
         btnNext.classList.remove("active");
      }
      if (x == -(100 * (sliderWrapper.children.length - 1))) {
         btnNext.classList.add("active");
      }
      sliderWrapper.style.transform = `translateX(${x}%)`
   })
}
function imageSlider(sliderClass, sliderWrapperClass, buttonPrevClass, buttonNextClass) {
   const slider = document.querySelector(`.${sliderClass}`)
   const sliderWrapper = document.querySelector(`.${sliderWrapperClass}`)
   let x = 0;
   slider.addEventListener("click", function (e) {
      if (e.target.closest(`.${buttonPrevClass}`)) {
         for (let i = 0; i < sliderWrapper.children.length; i++) {
            let slide = sliderWrapper.children[i];
            slide.classList.remove("image-slide_active")
         }
         sliderWrapper.children[x].classList.remove("image-slide_hidden")
         x--;
         sliderWrapper.children[x].classList.remove("image-slide_hidden")
         sliderWrapper.children[x].classList.add("image-slide_active")
      }
      if (e.target.closest(`.${buttonNextClass}`)) {
         for (let i = 0; i < sliderWrapper.children.length; i++) {
            let slide = sliderWrapper.children[i];
            slide.classList.remove("image-slide_active")
         }
         sliderWrapper.children[x].classList.add("image-slide_hidden")
         x++;
         sliderWrapper.children[x].classList.add("image-slide_active")
      }
   })
}

document.addEventListener("DOMContentLoaded", () => {
   if (window.screen.width <= 900) {
      $.scrollify.disable();
      body.classList.add("scroll")
   } else {
      scrollInGroupSection()
   }
   let posTop = window.pageYOffset; // Получение позиции скролла
   startCoord += posTop;             // Получение точных координат блоков
   jumpCoord += posTop;              // Получение точных координат блоков
   presidentCoord += posTop;         // Получение точных координат блоков
   principlesCoord += posTop;         // Получение точных координат блоков
   expertiseCoord += posTop;         // Получение точных координат блоков
   vitraCoord += posTop;         // Получение точных координат блоков
   groupCoord += posTop;         // Получение точных координат блоков
   presentationCoord += posTop;         // Получение точных координат блоков
   teamCoord += posTop;         // Получение точных координат блоков
   footerCoord += posTop;         // Получение точных координат блоков
   changeMenuStyles(posTop)
   workBurger()
   switchLanguage()
   slider("jump-slider", "jump-slider__wrapper", "jump-slider__button_prev", "jump-slider__button_next", "jump-slider__counter")
   slider("vitra-slider", "vitra-slider__wrapper", "vitra-slider__button_prev", "vitra-slider__button_next", "vitra-slider__counter")
   slider("vitra-slider", "vitra-slider__wrapper_small", "vitra-slider__button_prev", "vitra-slider__button_next", "vitra-slider__counter1")
   slider("team-slider", "team-slider__wrapper", "team-slider__btn_prev", "team-slider__btn_next", "team-slider__counter")
   imageSlider("team-slider", "team-images__wrapper", "team-slider__btn_prev", "team-slider__btn_next")
})
document.addEventListener("scroll", () => {
   let posTop = window.pageYOffset; // Получение позиции скролла
   changeMenuStyles(posTop)
})
//scrollItem.scrollHeight - scrollItem.scrollTop === scrollItem.clientHeight

