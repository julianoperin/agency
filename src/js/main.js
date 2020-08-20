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

  //! Owl-carousel
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

// Overlay
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
// End of Overlay

// Header
TweenMax.from(".navbar", 1, {
  delay: 2.6,
  opacity: 0,
  y: -50,
  ease: Expo.easeInOut,
});

TweenMax.from(".line span", 1.5, {
  delay: 2,
  y: 80,
  ease: Expo.easeInOut,
  stagger: {
    amount: 0.4,
  },
});

TweenMax.to(".reveal-img", 1, {
  delay: 2.6,
  x: 700,
  ease: Expo.easeInOut,
});

const imgIntro = document.querySelector(".hero-img img");
TweenMax.to(imgIntro, 1, {
  delay: 2.6,
  scale: 1,
  ease: Expo.easeInOut,
});

TweenMax.from(".scrolldown", 1, {
  delay: 3.4,
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut,
});
// End of Header
