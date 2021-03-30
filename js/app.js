// NavTriiger
const navTrigger = document.querySelector(".nav-trigger");
const siteWrapper = document.querySelector(".site-content-wrapper");

navTrigger.addEventListener("click", toggleNavBar);

function toggleNavBar () {
  let have = siteWrapper.classList.contains("scaled");


  if(have === true) {
    siteWrapper.classList.remove("scaled")
  } else {
    siteWrapper.classList.add("scaled");
  }
}


// Scroll Arrow
const upArrow = document.querySelector('.up-arrow');

window.addEventListener('scroll', showUpArrow);

function showUpArrow() {
  let y = window.scrollY;

  if(y > 200){
    upArrow.classList.add('showArrow');
  } else {
    upArrow.classList.remove('showArrow');
  }
}


