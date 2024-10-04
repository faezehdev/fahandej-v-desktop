gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

let listContainer = document.querySelector(".leftSide ul")
let list = document.querySelectorAll(".leftSide .listContainer a")
let cards = gsap.utils.toArray(".rightSide .card")

cards.forEach((item,i ) => {

    item.setAttribute("id" , `image-${i}`)


   ScrollTrigger.create({
        trigger:item,
        start:"top 50%",
        end:"bottom 50%",
        snap : {
            snapTo:[0.5],
            duration:1,
            delay:0,
        },
        onEnter : ()=>{

            $("a").removeClass("activeList")
            list[i].classList.add("activeList")
            
        },
        onEnterBack : ()=>{

            $("a").removeClass("activeList")
            list[i].classList.add("activeList")
            
        }
    })
});

list.forEach((element, i) => {
    element.setAttribute("href" ,`#image-${i}` )
    element.addEventListener("click",function(params) {
        let hash = element.getAttribute("href")
        gsap.to(window,{
            duration:2,
            scrollTo:hash,
        })
    })
});


gsap.to(".listContainer ul", {
    yPercent: -90,
    ease: "none",
    scrollTrigger: {
      trigger: ".listContainer ul",
      start: "top top",
      end: "max",
      scrub: 1,
      pin: ".listContainer",
    },
  });

  
