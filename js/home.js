const interleaveOffset = 0.5;
// main slider
let swiperMin = new Swiper('.swiper-Container', {
    loop: false,
    direction: "vertical",
    autoplay: false,
    speed: 1000,
    grabCursor: false,
    watchSlidesProgress: true,
    mousewheelControl: true,
    mousewheel: true,
      pagination: {
        el: '.Home .swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
        return '<span class="' + className + '">'  + '</span>';
    
        }
      },
      on: {
        progress: function() {
          console.log('test')
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress;
            let innerOffset = swiper.height * interleaveOffset;
            let innerTranslate = slideProgress * innerOffset;
    
            TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
              y: innerTranslate,
            });
          }
        },
        setTransition: function(slider, speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
        slideChange: function () {
            let swiper = this;
            setTimeout(function () {
                swiper.params.touchReleaseOnEdges = false;
                swiper.params.mousewheel.releaseOnEdges = false;
            });
          },
        //   reachEnd: function () {
        //     let swiper = this;
        //     setTimeout(function () {
        //         swiper.params.touchReleaseOnEdges = true;
        //         swiper.params.mousewheel.releaseOnEdges = true;
        //         lenis.start();
        //       console.log("end"); 
        //     //   window.scrollTo(0,0)
        //          body.style.position="relative"
        //     }, 500);
        //   },
        //   reachBeginning: function () {
        //     let swiper = this;
        //     console.log("begin");
        //     // body.style.position="fixed"
           
        //     lenis.scrollTo('.sec-1');
    
        //     setTimeout(function () {
        //         swiper.params.touchReleaseOnEdges = true;
        //         swiper.params.mousewheel.releaseOnEdges = true;
        //          lenis.stop();
        //     }, 500);
        //   },
      }
    });

    // banner slider
    let SwiperBanner= new Swiper ('.swiper-banner', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed:5000,
        effect:'fade' ,
        autoplay:{
            delay:0
        },
        pagination: {
            el: '.Section-1 .swiper-pagination',
            clickable: true,
            type: 'bullets',
            renderBullet: function (index, className) {
            return '<span class="' + className + '">'  + '</span>';
        
            }
          },
        })