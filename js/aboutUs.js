gsap.registerPlugin(ScrollTrigger);
let lastIndex = 0;
 let slide1 = document.querySelector(".slide-1")
 let slide2 = document.querySelector(".slide-2")
 let inner1 = document.querySelector(".inner1") 
const mainSwiper = new Swiper('.mainSwiper', {
  // Optional parameters
  allowTouchMove:false,
  direction: 'vertical',
  mousewheel :true,
  speed:1500,
  effect:"creative",
creativeEffect:{
  prev:{
    translate :["200%" , 0]
  }
  ,next:{
    translate:[0 , "200%" , 0]
  }
}

});

mainSwiper.on("slideChangeTransitionStart" , function (params) {
  if (mainSwiper.activeIndex < lastIndex) {
    console.log("up");
      slide1.classList.remove("slideUp")
    
    setTimeout(() => {
      slide1.classList.remove("firsIndex")
      slide2.classList.remove("secondDelay")
    }, 1800);
    lastIndex = mainSwiper.activeIndex
  }
  else{
    console.log("down");
    lastIndex = mainSwiper.activeIndex;
    setTimeout(() => {
      
      slide1.classList.add("slideUp")
      slide2.classList.add("secondDelay")
      setTimeout(() => {
        slide1.classList.add("firsIndex")
      }, 1000);

    }, 1500);
  }
  
})

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
  
    if (scrollTInner>10) {
      setTimeout(() => {
        mainSwiper.mousewheel.disable();
      }, 200);
    } else {
      setTimeout(() => {
        mainSwiper.mousewheel.enable();
      }, 200);
    }
  });