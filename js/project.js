gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "top top",
    end: "bottom bottom",
    pin: true,
    // pinSpacing: true,
    // markers: true
  }
});


Scrollbar.initAll(); 

document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });