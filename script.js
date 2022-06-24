// search button opning and closing
let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');

// login button, to submit details
// close window of form
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');

// menu button causes navbar open for mobile
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');


// Changing videos on HomeScreen
let videoBtn=document.querySelectorAll('.vid-btn');


// when scrolled search bar disappears
window.onscroll=() =>{    
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

/* When click search icon it converts to cross and 
shows search bar */
searchBtn.addEventListener('click', ()=> {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
   
// when clicked on person icon login form appears
formBtn.addEventListener('click', ()=> {
    loginForm.classList.add('active');
});

// when clicked on close button login form goes
formClose.addEventListener('click', ()=> {
    loginForm.classList.remove('active');
});

/* When click menu icon it converts to cross and 
shows search bar */
menu.addEventListener('click', ()=> {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector("#video-slider").src=src;
    } );
}
);

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay: 2500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    breakpoints:{
        640: {
          
            slidesPerView:1,
        },
        768: {
          
            slidesPerView:2,
        },        
        1024: {
          
            slidesPerView:3,
        },

    }
  });
