$(".home-speaker-carousel").owlCarousel({
  autoplayTimeout: 2000, // Set autoplay timeout to 5 seconds
  slideSpeed: 50000, // Set slide speed to 5 seconds
  speed: 5000, // Set animation speed to 5 seconds
  paginationSpeed: 8000, // Adjust pagination speed as needed
  margin: 0,
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
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
