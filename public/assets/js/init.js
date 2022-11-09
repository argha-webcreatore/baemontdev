$(document).ready(function(){
    AOS.init();
    $('.hero-slider').owlCarousel({
      loop:true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 4500,
      smartSpeed: 1500,
      animateOut: 'slideOutDown',
      animateIn: 'heartBeat',
      items:1,
    });

    $(".d-carousel-cener").owlCarousel({
      center: true,
      items:4,
      loop:true,
      margin:10,
      nav: true,
      dots: false,
      responsive : {
          0 : {
            items:3,
          },
          480 : {
            items:3,
          },
          768 : {
            items:4,
          }
      },
    });

    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});