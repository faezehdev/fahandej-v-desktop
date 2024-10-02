gsap.registerPlugin(ScrollTrigger);
let mainSlide = document.querySelectorAll(".mainSlide");
let pagination = document.querySelector(".pagination ul");
let lastIndex = 0;
let slide1 = document.querySelector(".slide-1");
let slide2 = document.querySelector(".slide-2");
let inner1 = document.querySelector(".inner1");
let darkFlag = true;
let gsapFlag = 0;
let openFom= document.querySelector(".openFom")
let formPopUp= document.querySelector(".formPopUp")
let closePopForm= document.querySelector(".closePopForm")
let darkSections = document.querySelectorAll(".darkSection");
const mainSwiper = new Swiper(".mainSwiper", {
  // Optional parameters
  allowTouchMove: false,
  direction: "vertical",
  mousewheel: true,
  speed: 1500,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["200%", 0],
    },
    next: {
      translate: [0, "200%", 0],
    },
  },
  on: {
    init: function (swiper) {
      mainSlide.forEach((element) => {
        let newLi = document.createElement("li");
        newLi.classList.add("paging");
        pagination.appendChild(newLi);
      });

      paging = document.querySelectorAll(".paging");
      paging[0].classList.add("activePaging");
      pagination.classList.add("darkPagination");
    },
    slideChange: function () {
      setTimeout(() => {
        $(".paging").removeClass("activePaging");
        paging[this.activeIndex].classList.add("activePaging");

        if (this.activeIndex == 0) {
          pagination.classList.add("darkPagination");
        } else {
          pagination.classList.remove("darkPagination");
        }
      }, 600);
      setTimeout(() => {
        if (darkFlag) {
          darkSections.forEach((element) => {
            gsap.to(element, {
              scrollTrigger: {
                trigger: element,
                end: "bottom 20%",
                start: "top 50%",
                scroller: ".scrollContainer",
                scrub: true,
                // markers: true,
                onEnter: () => {
                  pagination.classList.add("darkPagination");
                },
                onLeave: () => {
                  pagination.classList.remove("darkPagination");
                },
                onEnterBack: () => {
                  pagination.classList.add("darkPagination");
                },
                onLeaveBack: () => {
                  pagination.classList.remove("darkPagination");
                },
              },
            });
          });
          darkFlag=false
        }
      }, 1000);
  
      if (gsapFlag == 0) {
        for (let o = 1; o < mainSlide.length; o++) {
          const element = mainSlide[o];
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              end: "bottom 80%",
              start: "top 80%",
              scroller: ".scrollContainer",
              scrub: true,
              onEnter: () => {
                $(".paging").removeClass("activePaging");
                paging[o].classList.add("activePaging");
              },
              onEnterBack: () => {
                $(".paging").removeClass("activePaging");
                paging[o].classList.add("activePaging");
              },
            },
          });
        }
        gsapFlag++;
      }
      if (gsapFlag < 2) {
        for (let o = 1; o < mainSlide.length; o++) {
          const element = mainSlide[o];
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              end: "bottom 80%",
              start: "top 50%",
              scroller: ".scrollContainer",
              scrub: true,

              onEnter: () => {
                $(".paging").removeClass("activePaging");
                paging[o].classList.add("activePaging");
              },
              onEnterBack: () => {
                $(".paging").removeClass("activePaging");
                paging[o].classList.add("activePaging");
              },
            },
          });
        }
        gsapFlag++;
      }
    },
  },
});

mainSwiper.on("slideChangeTransitionStart", function (params) {
  if (mainSwiper.activeIndex < lastIndex) {
    console.log("up");
    slide1.classList.remove("slideUp");

    setTimeout(() => {
      slide1.classList.remove("firsIndex");
      slide2.classList.remove("secondDelay");
    }, 1800);
    lastIndex = mainSwiper.activeIndex;
  } else {
    console.log("down");
    lastIndex = mainSwiper.activeIndex;
    setTimeout(() => {
      slide1.classList.add("slideUp");
      slide2.classList.add("secondDelay");
      setTimeout(() => {
        slide1.classList.add("firsIndex");
      }, 1000);
    }, 1500);
  }
});

let ScrollBar = window.Scrollbar;
let mainscrollbarOption = {
  dumping: 0.08,
};
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

slide2.addEventListener("scroll", function (params) {
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


paging.forEach((element, i) => {
    element.addEventListener("click", function (params) {
      $(".paging").removeClass("activePaging");
      paging[i].classList.add("activePaging");
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
  });

  openFom.addEventListener("click" ,function (params) {
    formPopUp.classList.add("activePop")
  })

  closePopForm.addEventListener("click" ,function (params) {
    formPopUp.classList.remove("activePop")
  })

