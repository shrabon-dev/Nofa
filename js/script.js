
$(".slick-doctor").slick(
    {
        arrows: true,
        autoplay: true,
        prevArrow:'<i class="fas fa-chevron-left prev"></i>',
        nextArrow:'<i class="fas fa-chevron-right next"></i>',
    }
);
var typed = new Typed('.tst', {
    strings: ["How can I help you.", "Are you stay here"
               ,"Welcome o our Chamber"],
    typeSpeed: 40,
    loop: true,
    backSpeed: 40,
    backDelay: 1500,
    startDelay: 1500,
  });