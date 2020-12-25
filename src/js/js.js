function burgerMenu(selector) {
    const menu = document.querySelector(selector);
    const button = document.querySelector('.burger-menu_button');
    const links = document.querySelectorAll('.burger-menu_link');
    const overlay = document.querySelector('.burger-menu_overlay');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    links.forEach((e) => e.addEventListener('click', () => toggleMenu()));
    overlay.addEventListener('click', () => toggleMenu());
    function toggleMenu() {
      menu.classList.toggle('burger-menu__active');
    }
  }
  burgerMenu('.burger-menu');