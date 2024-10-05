gsap.registerPlugin(ScrollTrigger);
let mainSlide = document.querySelectorAll(".mainSlide");
let pagination = document.querySelector(".pagination ul");
let lastIndex = 0;
let paging;
let slide1 = document.querySelector(".slide-1");
let slide2 = document.querySelector(".slide-2");
let inner1 = document.querySelector(".inner1");
let navBarSlider = document.querySelectorAll(".navBarSlider ul li");
let gsapFlag = 0;
let countFlag = true;
let darkFlag=true;
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
      setTimeout(() => {
        if (countFlag) {
          const counters = document.querySelectorAll(".counter span");

          counters.forEach((counter) => {
            counter.innerText = "0";
            const updateCounter = () => {
              const target = +counter.getAttribute("data-target");
              const count = +counter.innerText;
              const increment = target / 200;
              if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 1);
              } else counter.innerText = target;
            };
            updateCounter();
          });

          countFlag = false;
        }
      }, 1500);
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

const lenis = new Lenis({
  wrapper: document.getElementById("scrollContainer"),
  content: document.querySelector(".innerSlide"),
  duration: 2,
});

lenis.on("scroll", (e) => {


});

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



const missionSlider = new Swiper(".missionSlider", {
  // Optional parameters

  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 80,
  speed: 1000,
  // If we need pagination
  pagination: {
    el: ".missionpagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".missionPrev",
    prevEl: ".missionNext",
  },
});
const paraSlider = new Swiper(".paraSlider", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,

  speed: 1000,
  // If we need pagination
  pagination: {
    el: ".paraSliderpagination",
    clickable: true,
  },
  allowTouchMove: false,
  // Navigation arrows
  navigation: {
    nextEl: ".prevTitle",
    prevEl: ".nextTitle",
  },
});
const titleSlider = new Swiper(".titleSlider", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  allowTouchMove: false,
  speed: 1000,
  // If we need pagination
  pagination: {
    el: ".paraSliderpagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".prevTitle",
    prevEl: ".nextTitle",
  },
});
const managerSlider = new Swiper(".managerSlider", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  allowTouchMove: false,
  speed: 1000,
  // If we need pagination
  pagination: {
    el: ".managerPagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return number;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".prevmanager",
    prevEl: ".nextmanager",
  },
});

const imgSlider = new Swiper(".imgSlider", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  allowTouchMove: false,
  speed: 1000,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".prevmanager",
    prevEl: ".nextmanager",
  },
});


navBarSlider[0].classList.add("activenavBarSlider")


const slider6 = new Swiper(".slider6", {
  // Optional parameters

  slidesPerView: 1,
  allowTouchMove: false,
  speed: 1000,
  pagination: {
    el: ".pagination6",
    clickable: true,
  },

  on:{
    slideChange:function (params) {
      
      $(".navBarSlider ul li").removeClass("activenavBarSlider")
      console.log(this.activeIndex);
      
      navBarSlider[this.activeIndex].classList.add("activenavBarSlider")
    }
  }
});

slider6.slideTo(0,1000)

navBarSlider.forEach((element,i) => {
  element.addEventListener("click" , function (params) {
    

    $(".navBarSlider ul li").removeClass("activenavBarSlider")

    element.classList.add("activenavBarSlider")
    slider6.slideTo(i,1000)
    console.log(slider6.activeIndex);
    
  })
});



const certiThumbSlider = new Swiper(".certiThumbSlider", {
  // Optional parameters

  slidesPerView: 5,
  speed: 1000,
  spaceBetween: 20,

  navigation: {
    nextEl: '.prevThumb',
    prevEl: '.nexThumb',
  },
});


const certificateSlider = new Swiper(".certificateSlider", {
  // Optional parameters

  slidesPerView: 1,
  speed: 1000,
  thumbs: {
    swiper: certiThumbSlider
  }
});

let totalbookSlider  = document.querySelectorAll(".bookSlider .swiper-slide");

const bookSlider = new Swiper(".bookSlider", {
  // Optional parameters

  slidesPerView: 5,
  speed: 1000,
  spaceBetween: 20,
  
  pagination: {
    el: ".bookPagination",
    
    type: 'custom',
    renderCustom: function (swiper, current, total) {
        // return (totalbookSlider.length-total+ current) + '/' + (totalbookSlider.length); 
        return current + '/' + (total ); 
    }
  },

  navigation: {
    nextEl: ".nextbook",
    prevEl: ".prevbook",
  },
});


const popSlider = new Swiper('.popSlider', {
  // Optional parameters
speed:1000,
pagination: {
  el: ".popUpPagination",
  
  type: 'custom',
  renderCustom: function (swiper, current, total) {
      return current + '/' + (total ); 
  }
},

navigation: {
  nextEl: ".nextpopUp",
  prevEl: ".prevpopUp",
},
});

let bookSliders = document.querySelectorAll(".bookSlider .swiper-slide");
let aboutpopUp = document.querySelector(".aboutpopUp")
let closePop  = document.querySelector(".closePop ")
bookSliders.forEach((element,i) => {
  element.addEventListener("click" , function (params) {

    popSlider.slideTo(i,0)
    aboutpopUp.classList.add("activePop")
  })
});

closePop.addEventListener("click" , function (params) {
  aboutpopUp.classList.remove("activePop")
})


const memberSlider = new Swiper('.memberSlider', {
  // Optional parameters
speed:1000,
slidesPerView: 4,
spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.prevMember',
    prevEl: '.nextMember',
  },


});