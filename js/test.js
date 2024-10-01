gsap.registerPlugin(ScrollTrigger);
let lastIndex = 0;
let verticalPagination = document.querySelectorAll(".verticalPagination ul li");
let slide01 = document.querySelector(".slide01");
let slide02 = document.querySelector(".slide02");
let inner1 = document.querySelector(".inner1");
let imgClass = document.querySelector(".img");
let mainSection = document.querySelectorAll(".mainSection");
let verticalPaginationUl = document.querySelector(".verticalPagination ul");
let leftSide = document.querySelector(".section3 .leftSide");
let gsapFlag = 0;

var mainSwiper = new Swiper(".mainSwiper", {
  direction: "vertical",
  allowTouchMove: false,
  speed: 1500,
  mousewheel: {
    invert: false,
  },
  on: {
    slideChange: function () {
      if (gsapFlag == 0) {
        setTimeout(() => {
          if ($(window).height() >= 800) {
            gsap.from(".section4", {
              scrollTrigger: {
                trigger: ".section4",
                end: "bottom 40%",
                start: "top 80%",
                scroller: ".scrollContainer",
                scrub: true,
                onEnter: () => {
                  document.querySelector(".innerBack").style.backgroundColor =
                    "#1b1b1b";
                  document
                    .querySelector("header")
                    .classList.remove("darkHrader");
                },
                onLeave: () => {
                  document.querySelector("header").classList.add("darkHrader");
                  document.querySelector(".innerBack").style.backgroundColor =
                    "white";
                },
                onEnterBack: () => {
                  document.querySelector(".innerBack").style.backgroundColor =
                    "#1b1b1b";
                  document
                    .querySelector("header")
                    .classList.remove("darkHrader");
                },
                onLeaveBack: () => {
                  document.querySelector("header").classList.add("darkHrader");
                  document.querySelector(".innerBack").style.backgroundColor =
                    "white";
                },
              },
            });

            gsap.to(".img", {
              scrollTrigger: {
                trigger: ".img",
                end: "bottom 83%",
                start: "top 10%",
                endTrigger: ".text-inner4",
                scroller: ".scrollContainer",
                pin: true,

                toggleActions: "play none none reset",
              },
            });
            gsap.to(".scrollbarInnerContainer3", {
              scrollTrigger: {
                trigger: ".scrollbarInnerContainer3",
                end: "bottom 83%",
                start: "top 50%",
                endTrigger: ".text-inner4",
                scroller: ".scrollContainer",
                onEnter: () => {
                  document
                    .querySelector(".scrollbarInnerContainer3")
                    .classList.add("activeLeftSide");
                },
                onLeave: () => {
                  document
                    .querySelector(".scrollbarInnerContainer3")
                    .classList.add("activeLeftSide");
                },
                onEnterBack: () => {
                  document
                    .querySelector(".scrollbarInnerContainer3")
                    .classList.add("activeLeftSide");
                },
                onLeaveBack: () => {
                  setTimeout(() => {
                    document
                      .querySelector(".scrollbarInnerContainer3")
                      .classList.remove("activeLeftSide");
                  }, 1000);
                },
              },
            });
          } else {
            gsap.from(".section4", {
              scrollTrigger: {
                trigger: ".section4",
                end: "bottom 50%",
                start: "top 80%",
                scroller: ".scrollContainer",
                scrub: true,

                onEnter: () => {
                  document.querySelector(".innerBack").style.backgroundColor =
                    "#1b1b1b";
                  document
                    .querySelector("header")
                    .classList.remove("darkHrader");
                },
                onLeave: () => {
                  document.querySelector("header").classList.add("darkHrader");
                  document.querySelector(".innerBack").style.backgroundColor =
                    "white";
                },
                onEnterBack: () => {
                  document.querySelector(".innerBack").style.backgroundColor =
                    "#1b1b1b";

                  document
                    .querySelector("header")
                    .classList.remove("darkHrader");
                },
                onLeaveBack: () => {
                  document.querySelector("header").classList.add("darkHrader");
                  document.querySelector(".innerBack").style.backgroundColor =
                    "white";
                },
              },
            });

            gsap.to(".img", {
              scrollTrigger: {
                trigger: ".img",
                end: "bottom 85%",
                start: "top 15%",
                endTrigger: ".text-inner4",
                scroller: ".scrollContainer",
                pin: true,

                toggleActions: "play none none reset",
              },
            });

            gsap.to(".scrollbarInnerContainer3", {
              scrollTrigger: {
                trigger: ".scrollbarInnerContainer3",
                end: "bottom 83%",
                start: "top 50%",
                endTrigger: ".text-inner4",
                scroller: ".scrollContainer",
                onEnter: () => {
                  document
                    .querySelector(".scrollbarInnerContainer3")
                    .classList.add("activeLeftSide");
                },
                onLeave: () => {
                  document
                    .querySelector(".scrollbarInnerContainer3")
                    .classList.add("activeLeftSide");
                },
                onEnterBack: () => {
                  document
                    .querySelector(".scrollbarInnerContainer3")
                    .classList.add("activeLeftSide");
                },
                onLeaveBack: () => {
                  setTimeout(() => {
                    document
                      .querySelector(".scrollbarInnerContainer3")
                      .classList.remove("activeLeftSide");
                  }, 1000);
                },
              },
            });
          }
        }, 1000);
      }

      if (gsapFlag == 0) {
        for (let o = 1; o < mainSection.length; o++) {
          const element = mainSection[o];
          console.log("element", element);
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              end: "bottom 80%",
              start: "top 80%",
              scroller: ".scrollContainer",
              scrub: true,
              onEnter: () => {
                $(".verticalPagination ul li").removeClass("activeList");
                verticalPagination[o].classList.add("activeList");
                if (element.getAttribute("data-light") != "dark") {
                  verticalPaginationUl.classList.add("darkPagination");
                } else {
                  verticalPaginationUl.classList.remove("darkPagination");
                }
              },
              onEnterBack: () => {
                $(".verticalPagination ul li").removeClass("activeList");
                verticalPagination[o].classList.add("activeList");
                if (element.getAttribute("data-light") != "dark") {
                  verticalPaginationUl.classList.add("darkPagination");
                } else {
                  verticalPaginationUl.classList.remove("darkPagination");
                }
              },
            },
          });
        }
        gsapFlag++;
      }
      if (gsapFlag < 2) {
        for (let o = 1; o < mainSection.length; o++) {
          const element = mainSection[o];
          console.log("element", element);
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              end: "bottom 80%",
              start: "top 50%",
              scroller: ".scrollContainer",
              scrub: true,

              onEnter: () => {
                $(".verticalPagination ul li").removeClass("activeList");
                verticalPagination[o].classList.add("activeList");
                if (element.getAttribute("data-light") != "dark") {
                  verticalPaginationUl.classList.add("darkPagination");
                } else {
                  verticalPaginationUl.classList.remove("darkPagination");
                }
              },
              onEnterBack: () => {
                $(".verticalPagination ul li").removeClass("activeList");
                verticalPagination[o].classList.add("activeList");
                if (element.getAttribute("data-light") != "dark") {
                  verticalPaginationUl.classList.add("darkPagination");
                } else {
                  verticalPaginationUl.classList.remove("darkPagination");
                }
              },
            },
          });
        }
        gsapFlag++;
      }

      if (this.activeIndex == 0) {
        verticalPagination[0].classList.add("activeList");
        document.querySelector("header").classList.remove("darkHrader");
      } else {
        document.querySelector("header").classList.add("darkHrader");
      }

      setTimeout(function () {
        mainSwiper.params.touchReleaseOnEdges = false;
        mainSwiper.params.mousewheel.releaseOnEdges = false;
      });
    },
    init: function () {
      verticalPagination[0].classList.add("activeList");
    },
    reachEnd: function () {
      setTimeout(function () {
        mainSwiper.params.touchReleaseOnEdges = true;
        mainSwiper.params.mousewheel.releaseOnEdges = true;

        console.log("end");
      }, 500);
    },
    reachBeginning: function () {
      console.log("begin");

      setTimeout(function () {
        mainSwiper.params.touchReleaseOnEdges = true;
        mainSwiper.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },
  },
  grabCursor: false,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["200%", 0],
    },
    next: {
      translate: [0, "200%", 0],
    },
  },
});
function activeHeightSet() {
  var activeHt = $(".swiper-slide-active .mainImg").height();

  eventActiveHt(activeHt);

  scrollUp();
}

function eventActiveHt(activeHt) {
  if (mainSwiper.activeIndex == 1) {
    // mainSwiper.mousewheel.disable();
    verticalPaginationUl.classList.add("darkPagination");
    $(".verticalPagination ul li").removeClass("activeList");
    verticalPagination[1].classList.add("activeList");
  } else if (mainSwiper.activeIndex == 0) {
    verticalPaginationUl.classList.remove("darkPagination");
    $(".verticalPagination ul li").removeClass("activeList");
    verticalPagination[0].classList.add("activeList");
  }
  if (mainSwiper.activeIndex < lastIndex) {
    console.log("up");
    // UP
    $(".slide01").removeClass("slideUp");
    slide01.classList.remove("slideUp");
    setTimeout(() => {
      slide01.classList.remove("firstIndex");
      slide02.classList.remove("secondDelay");
      inner1.classList.remove("innerUp");
    }, 1700);

    lastIndex = mainSwiper.activeIndex;
  } else {
    //  DOWN
    setTimeout(() => {
      slide01.classList.add("slideUp");
      slide02.classList.add("secondDelay");
      inner1.classList.add("innerUp");
      setTimeout(() => {
        slide01.classList.add("firstIndex");
      }, 1000);
    }, 1500);
    lastIndex = mainSwiper.activeIndex;
  }
  console.log();
  $(".swiper-container").stop(true).animate(
    { duration: 1000 },

    1000
  );
}

mainSwiper.on("slideChangeTransitionStart", activeHeightSet);

var visionSlider = new Swiper(".visionSlider .swiper-container", {
  slidesPerView: 1,
  speed: 1000,
  effect: "fade",
  pagination: {
    el: ".visionSlider .swiper-pagination",
    clickable: true,
    bulletClass: "vision-bullet",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".visionSlider .swiper-button.next",
    prevEl: ".visionSlider .swiper-button.prev",
  },
});
visionSlider.on("slideChange", (swip) => {
  var cls = `rotate${swip.activeIndex}`;
  document.querySelector(`.visionSlider`).classList.remove("rotate0");
  document.querySelector(`.visionSlider`).classList.remove("rotate1");
  document.querySelector(`.visionSlider`).classList.add(cls);

  var num = swip.activeIndex + 1;
  if (num < 10) {
    $(`.visionSlider .counter span:first-child`).text(`0${num}`);
  } else {
    $(`.visionSlider .counter span:first-child`).text(`${num}`);
  }
});

const slidercertificate = new Swiper(".slidercertificate", {
  speed: 1000,
  slidesPerView: 1.8,
  spaceBetween: 80,
  pagination: {
    el: ".slidercertificatePagination",
    type: "custom",

    renderCustom: function (swiper, current, total) {
      if (current < 10) {
        current = `0${current}`;
      }
      if (total < 10) {
        total = `0${total}`;
      }
      return `<span>${total}</span>` + "<i></i>" + `<span>${current}</span>`;
    },
  },

  navigation: {
    nextEl: ".next6",
    prevEl: ".prev6",
  },

  scrollbar: {
    el: ".slidercertificateScrollbar",
  },
});
const sliderRepresentation = new Swiper(".sliderRepresentation", {
  speed: 1000,
  slidesPerView: 1.8,
  spaceBetween: 80,
  pagination: {
    el: ".sliderRepresentationPagination",
    type: "custom",

    renderCustom: function (swiper, current, total) {
      if (current < 10) {
        current = `0${current}`;
      }
      if (total < 10) {
        total = `0${total}`;
      }
      return `<span>${total}</span>` + "<i></i>" + `<span>${current}</span>`;
    },
  },

  navigation: {
    nextEl: ".next7",
    prevEl: ".prev7",
  },

  scrollbar: {
    el: ".RepresentationScrollbar",
  },
});

var responseSlider = new Swiper(".responseSlider .swiper-container", {
  slidesPerView: 1,
  speed: 1000,
  effect: "fade",
  pagination: {
    el: ".responseSlider .swiper-pagination",
    clickable: true,
    bulletClass: "response-bullet",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".responseSlider .swiper-button.next",
    prevEl: ".responseSlider .swiper-button.prev",
  },
  on: {
    init: function (swiper) {
      let slidesresponseSlider = document.querySelectorAll(
        ".responseSlider .swiper-slide"
      );

      if (this.slides.length < 10) {
        $(".responseSlider .paginate .counter span:last-child").text(
          `0${slidesresponseSlider.length}`
        );
      } else {
        $(".responseSlider .paginate .counter span:last-child").text(
          slidesresponseSlider.length
        );
      }
    },
  },
});
responseSlider.on("slideChange", (swip) => {
  var cls = `rotate${swip.activeIndex}`;
  document.querySelector(`.responseSlider`).classList.remove("rotate0");
  document.querySelector(`.responseSlider`).classList.remove("rotate1");
  document.querySelector(`.responseSlider`).classList.remove("rotate2");
  document.querySelector(`.responseSlider`).classList.remove("rotate3");
  document.querySelector(`.responseSlider`).classList.remove("rotate4");
  document.querySelector(`.responseSlider`).classList.remove("rotate5");
  document.querySelector(`.responseSlider`).classList.remove("rotate6");
  document.querySelector(`.responseSlider`).classList.remove("rotate7");
  document.querySelector(`.responseSlider`).classList.remove("rotate8");
  document.querySelector(`.responseSlider`).classList.remove("rotate9");
  document.querySelector(`.responseSlider`).classList.remove("rotate10");
  document.querySelector(`.responseSlider`).classList.remove("rotate11");
  document.querySelector(`.responseSlider`).classList.remove("rotate12");
  document.querySelector(`.responseSlider`).classList.remove("rotate13");
  document.querySelector(`.responseSlider`).classList.remove("rotate14");
  document.querySelector(`.responseSlider`).classList.add(cls);
  var num = swip.activeIndex + 1;
  $(`.responseSlider .counter span:first-child`).text(`0${num}`);
});

const lenis = new Lenis({
  wrapper: document.getElementById("scrollContainer"),
  content: document.querySelector(".innerSlide"),
  duration: 2,
});

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

slide02.addEventListener("scroll", function (params) {
  let scrollTInner = $(this).scrollTop();

  if (scrollTInner > 10) {
    setTimeout(() => {
      mainSwiper.mousewheel.disable();
    }, 200);
  } else {
    setTimeout(() => {
      mainSwiper.mousewheel.enable();
    }, 200);
  }
});

for (let i = 0; i < verticalPagination.length; i++) {
  const element = verticalPagination[i];
  element.addEventListener("click", function (params) {
    $(".verticalPagination ul li").removeClass("activeList");
    element.classList.add("activeList");

    if (mainSwiper.activeIndex == 0) {
      if (i == 1) {
        mainSwiper.slideTo(1, 1000);
      } else if (i > 1) {
        mainSwiper.slideTo(1, 1000);
        setTimeout(() => {
          lenis.scrollTo(`.section${i + 1}`);
        }, 1000);
      }
    } else {
      if (i == 1) {
        lenis.scrollTo(`.section2`);
      } else if (i > 1) {
        lenis.scrollTo(`.section${i + 1}`);
      } else {
        lenis.scrollTo(`.section2`);

        setTimeout(() => {
          mainSwiper.slideTo(0, 1000);
        }, 1000);
      }
    }
  });
}
