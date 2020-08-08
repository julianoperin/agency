$(document).ready(function () {
  let $btns = $(".project-area .button-group button");

  $btns.click(function (e) {
    $(".project-area .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });

    return false;
  });

  $(".project-area .button-group #btn1").trigger("click");

  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

  // Owl-carousel

  $(".site-main .about-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
    },
  });

  // sticky navigation menu

  // let nav_offset_top = $(".header_area").height() + 50;

  // function navbarFixed() {
  //   if ($(".header_area").length) {
  //     $(window).scroll(function () {
  //       let scroll = $(window).scrollTop();
  //       if (scroll >= nav_offset_top) {
  //         $(".header_area .main-menu").addClass("navbar_fixed");
  //       } else {
  //         $(".header_area .main-menu").removeClass("navbar_fixed");
  //       }
  //     });
  //   }
  // }

  // navbarFixed();
});

//! Back to Top Btn
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    toTop.classList.add("active-scroll");
  } else {
    toTop.classList.remove("active-scroll");
  }
});

//! Overlay
TweenMax.to(".overlay", 2, {
  delay: 1.3,
  top: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".overlay span", 2, {
  delay: -0.3,
  opacity: 0,
  y: -150,
  ease: Expo.easeIn,
});

TweenMax.to(".overlay h1", 2, {
  opacity: 0,
  y: -150,
  ease: Expo.easeIn,
});
