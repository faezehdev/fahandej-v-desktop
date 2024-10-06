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
  
let btns = document.querySelectorAll('.Filters .ShowBTN')
btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        for(let h =0 ; h< btns.length ; h++){
            btns[h].classList.remove('active')
        }
        e.currentTarget.classList.add('active')

    })
})
function showBlog(){
  var elements = document.querySelectorAll('.Blog');
  var gallery = document.querySelector('.Articles')
  
  var groupSize = 5;
  var groupCount = Math.ceil(elements.length / groupSize);
  
  for (var i = 0; i < groupCount; i++) {
  var startIndex = i * groupSize;
  var endIndex = startIndex + groupSize;
  
  var groupElements = Array.from(elements).slice(startIndex, endIndex);
  
  var groupDiv = document.createElement('div');
  groupDiv.className = 'Row';
  console.log(groupElements);
  let groupInnerDiv = document.createElement('div')
  groupInnerDiv.className = 'innerRow'
  groupElements.forEach(function (element,index) {
  groupDiv.appendChild(element);
  console.log(index);
  if(index > 2){
      groupDiv.appendChild(groupInnerDiv)
      groupInnerDiv.appendChild(element)
  }
  
  });
  
  gallery.appendChild(groupDiv);
  }
  gsap.to('.Blog',{
    opacity:1,
    stagger:.2
  })
  
}
showBlog()
let btnF = document.querySelectorAll('.Filteritem')
let catid
btnF[0].querySelector('.ShowBTN').classList.add('active')
btnF.forEach(b=>{
  b.addEventListener('click',(e)=>{
  catid = e.currentTarget.getAttribute('data-catid')
  btnF.forEach(b=>{
    b.classList.remove('active')
    b.querySelector('.ShowBTN').classList.remove('active')
  })
  e.currentTarget.classList.add('active')
  e.currentTarget.querySelector('.ShowBTN').classList.remove('active')
  var url = `/load-blog.inc?catid=${catid}`;
  $(".Articles").load(url);
  setTimeout(() => {
    showBlog()
      gsap.to('.Blog',{
        opacity:1,
        stagger:.2
      })

  }, 1000);
  })
})
function remove(){
  document.querySelector('header').classList.remove('dark')
  document.querySelector('header').classList.remove('darkLogo')
}
function add(){
  document.querySelector('header').classList.add('dark')
  document.querySelector('header').classList.add('darkLogo')
}
gsap.to('.DesktopFooter',{

  scrollTrigger:{
    trigger:'.DesktopFooter',
    start:'top top',
    end:'bottom bottom',
    onEnter: () =>remove(),
    onEnterBack: () =>remove(),
    onLeave: () => add(),
    onLeaveBack: () =>add(),
  }
})