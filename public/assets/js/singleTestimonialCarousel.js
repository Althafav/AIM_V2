$(".single-testimonial-carousel").owlCarousel({
    slideSpeed: 500,
    paginationSpeed: 400,
    margin: 20,
    autoplay: true,
    items: 1,
    loop: true,
    dots: true,
    nav: true,
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
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  