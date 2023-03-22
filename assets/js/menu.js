const mobileOpenButton = document.getElementById('mobile-menu-icon');
const mobileCloseButton = document.getElementById('mobile-menu-close-button');
const mobileNav = document.getElementById('mobile-nav');
const mobileMenuLinks = document.querySelectorAll('._nav--mobile .nav__link');

const mobileNavContBody = document.getElementById('container-body');

mobileOpenButton.onclick = function () {
  mobileNav.classList.add('mobile-nav--active');
  mobileNavContBody.classList.add('body-disable');
  return false;
}

mobileCloseButton.onclick = function () {
  mobileNav.classList.remove('mobile-nav--active');
  mobileNavContBody.classList.remove('body-disable');
  return false;
}

mobileMenuLinks.onclick = function () {
  mobileNav.classList.remove('mobile-nav--active');
  mobileNavContBody.classList.remove('body-disable');
  return false;
}

Array.from(mobileMenuLinks).forEach(link => {
  link.addEventListener('click', function (event) {
    mobileNav.classList.remove('mobile-nav--active');
    mobileNavContBody.classList.remove('body-disable');
    return false;
  });
});