$(".home-sponsors-carousel").owlCarousel({
  slideSpeed: 500,
  paginationSpeed: 400,
  margin: 20,
  autoplay: true,
  items: 4,
  loop: true,
  dots: false,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});


$(".startup-exhibition-carousel").owlCarousel({
  slideSpeed: 500,
  paginationSpeed: 400,
  margin: 20,
  autoplay: true,
  items: 5,
  loop: true,
  dots: false,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});


$(".startup-sponsor-carousel").owlCarousel({
  slideSpeed: 500,
  paginationSpeed: 400,
  margin: 20,
  autoplay: true,
  items: 5,
  loop: true,
  dots: true,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});
