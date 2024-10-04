$('.Home').imagesLoaded( {

},  function() {
    $(document).ready(function() {
      
gsap.to(".Loading-Container svg", {
  opacity: 0,
  delay: 3,
  ease: "expo.in",
});
gsap.to(".Loading-Container", {
  scale: 0,
  delay: 4,
  ease: "expo.in",
});
      setTimeout(() => {
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
                el: '.swiper-Container > .swiper-pagination',
                clickable: true,
                type: 'bullets',
                renderBullet: function (index, className) {
                    console.log(className);
                return '<span class="' + className + '">'  +'<span class="inner"></span>'+ '</span>';
            
                }
              },
              on: {
                init:function(){
                 let swiper= this
                 let slidess = swiper.slides
                 console.log(slidess);
                 for(let g= 0 ; g < slidess.length ; g++){
                    slidess[g].setAttribute('data-index',g)
                 }
                },
                progress: function() {
                  console.log('test')
                  let swiper = this;
                  for (let i = 0; i < swiper.slides.length; i++) {
                    let slideProgress = swiper.slides[i].progress;
                    let innerOffset = swiper.height * interleaveOffset;
                    let innerTranslate = slideProgress * innerOffset;
                    console.log('translate',innerTranslate);
                    
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
                      swiper.slides[i].style.transform='scale(.85)'
                      if(swiper.slides[i].classList.contains('swiper-slide-active')){
                        swiper.slides[i].style.transform='scale(1)'
                      }
                  }
        
                },
                slideChange: function (e) {
                    let swiper = this;
                    for(let r= 0 ; r< swiper.slides.length ; r++){
                        let bullet = document.querySelectorAll(' .Home .swiper-Container > .swiper-pagination .swiper-pagination-bullet')
                        bullet[r].innerHTML = `<span class="inner"></span>`
                    }
                    document.querySelector(' .Home .swiper-Container > .swiper-pagination .swiper-pagination-bullet-active').innerHTML =`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.322887 4.22048C-0.107629 4.651 -0.107629 5.349 0.322887 5.77952L4.22048 9.67711C4.651 10.1076 5.349 10.1076 5.77952 9.67711L9.67711 5.77952C10.1076 5.349 10.1076 4.651 9.67711 4.22048L5.77952 0.322887C5.349 -0.107629 4.651 -0.107629 4.22048 0.322887L0.322887 4.22048ZM3.12915 4.68819C2.95695 4.8604 2.95695 5.1396 3.12915 5.31181L4.68819 6.87084C4.8604 7.04305 5.1396 7.04305 5.31181 6.87084L6.87085 5.31181C7.04305 5.1396 7.04305 4.8604 6.87084 4.68819L5.31181 3.12915C5.1396 2.95695 4.8604 2.95695 4.68819 3.12915L3.12915 4.68819Z" fill="#8F993C"/>
            </svg>
            `
         
                 let active =  e.slides[swiper.activeIndex]
                 let id =active.getAttribute('data-index')
                 console.log('active Section',id);
                 switch(id){
                    case '0':{
                        console.log('Section',0);
                        document.querySelector('header').classList.remove('dark')
                        document.querySelector('header').classList.remove('darkLogo')

                        break
                    }
                    case '1':{
                        console.log('Section',1);
                        document.querySelector('header').classList.add('dark')
                        document.querySelector('header').classList.remove('darkLogo')

                        break
                    }
                    case '2':{
                        console.log('Section',2);
                        document.querySelector('header').classList.add('dark')
                        document.querySelector('header').classList.add('darkLogo')

                        break
                    }
                    case '3':{
                        console.log('Section',3);
                        document.querySelector('header').classList.remove('dark')
                        document.querySelector('header').classList.remove('darkLogo')

                        break
                    }
                    case '4':{
                        console.log('Section',4);
                        document.querySelector('header').classList.remove('dark')
                        document.querySelector('header').classList.remove('darkLogo')

                        break
                    }
                }
                  },
              }
            });
            document.querySelector(' .Home .swiper-Container > .swiper-pagination .swiper-pagination-bullet-active').innerHTML =`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.322887 4.22048C-0.107629 4.651 -0.107629 5.349 0.322887 5.77952L4.22048 9.67711C4.651 10.1076 5.349 10.1076 5.77952 9.67711L9.67711 5.77952C10.1076 5.349 10.1076 4.651 9.67711 4.22048L5.77952 0.322887C5.349 -0.107629 4.651 -0.107629 4.22048 0.322887L0.322887 4.22048ZM3.12915 4.68819C2.95695 4.8604 2.95695 5.1396 3.12915 5.31181L4.68819 6.87084C4.8604 7.04305 5.1396 7.04305 5.31181 6.87084L6.87085 5.31181C7.04305 5.1396 7.04305 4.8604 6.87084 4.68819L5.31181 3.12915C5.1396 2.95695 4.8604 2.95695 4.68819 3.12915L3.12915 4.68819Z" fill="#8F993C"/>
            </svg>
            `
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
                
// projects hover
let projects = document.querySelectorAll('.Project')
projects.forEach(p=>{
    p.addEventListener('mouseenter',(e)=>{
        for(let i=0 ; i<projects.length ; i++){
            projects[i].classList.add('hide')
          }
          e.currentTarget.classList.add('onn')
    })
    p.addEventListener('mouseleave',(e)=>{
        for(let i=0 ; i<projects.length ; i++){
            projects[i].classList.remove('onn')
            projects[i].classList.remove('hide')

          }

    })
})
      }, 4000);
 
    })

})
