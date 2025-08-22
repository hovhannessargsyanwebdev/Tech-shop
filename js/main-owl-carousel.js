$(document).ready(function(){
  $('.main-page-first-owl').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText:["<div class='nav-btn prev-slide'><img src='img/svg/left-arrow.svg' alt=''></div>",
    "<div class='nav-btn next-slide'><img src='img/svg/right-arrow.svg' alt=''></div>"],
    responsive:{
      0: {
        items:1
      },
      768: {
        items:2
      },
      992: {
        items:3
      },
      1200: {
        items:4
      }
    }
  }),
  
   $('.main-page-second-owl').owlCarousel({
    margin:10,
    loop:true,
    nav:true,
    dots:true,
    // screenLeft:true,
    autoWidth:true,
   

    // "<div class='nav-btn prev-slide'><img src='img/svg/left-arrow.svg' alt=''></div>"
    navText:["<div class='nav-btn next-slide'><img src='img/svg/right-arrow.svg' alt=''></div>"],
    responsive: {
      0:{
        items:1,
        autoWidth:false,
      },
      768:{
        items:2,
        screenLeft:true,
      },
      992: {
        items:3,
        autoWidth:true,
      },
      1200: {
        items:4,
      },
    }
   })  
})