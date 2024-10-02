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