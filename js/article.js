let header = document.querySelector('header')
header.classList.add('dark')
header.classList.add('darkLogo')
  // Enable Scroll

  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  
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
document.querySelectorAll('.sharee').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.parentElement.classList.toggle('share__wrapper--active');
    e.target.classList.toggle('toggle-button--active');
  });
});

  // share blog
  let whatsapp = document.querySelector('.share__wrapper .whatsapp')
  let twitter = document.querySelector('.share__wrapper .twitter')
  let instagram = document.querySelector('.share__wrapper .instagram')
  let proLink = document.querySelector('.bloglink').getAttribute('datalink')
 console.log('link',proLink);
 let url = window.location.href 
  whatsapp.setAttribute('href',`https://api.whatsapp.com/send?text=${proLink}`)
  instagram.setAttribute('href',`https://www.instagram.com/?url=${proLink}`)
  twitter.setAttribute('href',`"https://twitter.com/intent/tweet?url=${proLink}`)
