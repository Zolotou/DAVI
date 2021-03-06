//modal
let linkModal = document.querySelectorAll("*[data-modal-btn]")
for (let i = 0; i < linkModal.length; i++) {
  linkModal[i].addEventListener('click', function () {
    let name = linkModal[i].getAttribute('data-modal-btn');
    let modal = document.querySelector("[data-modal-window='" + name + "']")
    modal.style.display = "block"
    document.body.classList.add('lock')
    let closeModal = modal.querySelector('.close_modal_window')
    closeModal.addEventListener('click', function () {
      modal.style.display = "none"
      document.body.classList.remove('lock')
    })
  })
}
window.onclick = function (e) {

  if (e.target.hasAttribute('data-modal-window')) {
    let modals = document.querySelectorAll("*[data-modal-window]")
    for (let i = 0; i < modals.length; i++)
      modals[i].style.display = "none";
    document.body.classList.remove('lock')
  }
}

//slider
const buttonsWrapper = document.querySelector(".map");
if (buttonsWrapper !== null) {
  /*checking if the buttonsWrapper is not null, i.e. the node with class .map exists in the dom tree.*/
  const slides = document.querySelector(".slider-track");

  buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
      Array.from(buttonsWrapper.children).forEach(item =>
        item.classList.remove("active")
      );
      if (e.target.classList.contains("first")) {
        slides.style.transform = "translateX(-0%)";
        e.target.classList.add("active");
      } else if (e.target.classList.contains("second")) {
        slides.style.transform = "translateX(-33%)";
        e.target.classList.add("active");
      } else if (e.target.classList.contains('third')) {
        slides.style.transform = 'translatex(-50%)';
        e.target.classList.add('active');
      }
    }
  })
}

//Scroll 
const headerWrapperHeight = document.querySelector('.header-wrapper').offsetHeight;

const laptopAnchors = document.querySelectorAll('.navigation a');
const mobileAnchors = document.querySelectorAll('.mobile-navigation a');
const hiddenMenuSwitch = document.querySelector('.hidden-menu-ticker');
//const particlesBlockHeight = document.querySelector('#particles-js').offsetHeight; // высота блока с аницмацией
const currentPosition = window.scrollY + headerWrapperHeight; // + высота фиксированного меню (можно указать offsetHeight меню в шапке)
const anchors = [...laptopAnchors, ...mobileAnchors]; // объединим массивы со ссылками на пункту обоих меню
//smoothScroll.onClick
anchors.forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    const addr = document.location.pathname;
    if (addr === '/DAVI/index.html' || addr === '/DAVI/') {
      event.preventDefault();
    }
    hiddenMenuSwitch.checked = false;
    anchors.forEach(el => el.classList.remove('active')); // очистим все классы элементов меню от active
    // добавим active к тому, по которому кликнули
    anchor.classList.add('active');
    const blockID = event.target.getAttribute('href').substr(1); // получим id блока, к которому будем скроллить
    const block = document.getElementById(blockID); // найдем узел нужного блока в DOM
    window.scrollTo({
      top: block.offsetTop - headerWrapperHeight,
      behavior: 'smooth',
    })
  })
})

//Changing the active point in menu while scrolling
/* document.addEventListener('scroll', onScroll);
function onScroll(event) {

  const sect = document.querySelectorAll('section');
  sect.forEach((el) => {
    if (el.offsetTop <= currentPosition && el.offsetTop + el.offsetHeight > currentPosition) {
      anchors.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substr(1)) {
          a.classList.add('active');
        }
      })
    }
  })
} */

// анимация карточек при скролле страницы
const animItems = document.querySelectorAll('.activeItemanime')
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight; //get height of item
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      //высота окна браузера - высота анимированного обекта / коофициент
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      //иногда аниминированный объект выше высоты браузера => перестроить момент старт
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      // если прокрутили больше,чем позиция щбъекта - точка старта, но меньше чем позиция объекта - его высота
      if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset - animItemHeight)) {
        animItem.classList.add('activeAnime')
      } else {
        //если не нужно анимировать при возврате к началу страницы
        if (!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('activeAnime')
        }
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + screenLeft }
}



// Живая линия для мобильного меню
document.addEventListener('DOMContentLoaded', () => {
  let navline = document.querySelector('.nav_line');
  let navItem = document.querySelectorAll('.navigation__link');
  let headerNavigationBlock = document.querySelector('.header__navigation');
  //navline.style.width = `${navItem[0].offsetWidth}px`;
  // navItem.forEach(el => {
  for (let i = 0; i < navItem.length; i++) {

    navItem[i].addEventListener('mouseenter', (e) => {

      navline.style.display = `inline`;
      navline.style.width = `${e.currentTarget.offsetWidth}px`;
      navline.style.left = `${e.currentTarget.offsetLeft}px`;
      if (i === 0) {
        navline.style.backgroundColor = `red`;
      } else if (i === 1) {
        navline.style.backgroundColor = `green`;
      } else if (i === 2) {
        navline.style.backgroundColor = `orange`;
      } else {
        navline.style.backgroundColor = `blue`;
      }
    });
  }

})
