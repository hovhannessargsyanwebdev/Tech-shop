var sync1 = $(".slider");
var sync2 = $(".navigation-thumbs");

var thumbnailItemClass = '.owl-item';

var slides = sync1.owlCarousel({
  items: 1,
  loop: false,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: true,
  dots: false,
  navText:["<div class='nav-btn prev-slide'><img src='img/svg/left-arrow.svg' alt=''></div>",
    "<div class='nav-btn next-slide'><img src='img/svg/right-arrow.svg' alt=''></div>"],  
  responsive:{
    768: {
      nav: false,
    },
  }
})

var thumbs = sync2.owlCarousel({
  items:4,
  loop:false,
  margin:10,
  nav: false,
  dots: false,
})
.on('click', thumbnailItemClass, function(e) {
    e.preventDefault();
    var duration = 300;
    var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
    sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
}).on("changed.owl.carousel", function (el) {
  var number = el.item.index;
  $owl_slider = sync1.data('owl.carousel');
  $owl_slider.to(number, 0, false);
});
