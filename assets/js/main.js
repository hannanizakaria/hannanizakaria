/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
});







/*===== MENU SHOW ====*/
function mobileMenu() {
    if (document.getElementById('navlist').style.display == 'block') {
        document.getElementById('navlist').style.display = 'none';
    } else{
        document.getElementById('navlist').style.display = 'block';
    }
}
document.getElementById('nav-toggle').addEventListener('click' , mobileMenu);

function resetMenu() {
    if (window.innerWidth >= 900) {
        document.getElementById('navlist').style.display = 'flex';
    } else if (window.innerWidth < 900) {
        document.getElementById('navlist').style.display = 'none';
    }
}
window.addEventListener('resize', resetMenu);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/














const bar = document.getElementById('toggle');
const close = document.getElementById('toggle');
const nav = document.getElementById('nav__lis');

if (toggle) {
    toggle.addEventListener('click', () => {
        nav.classList.add('show');
    })
}
