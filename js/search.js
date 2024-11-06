let header = document.querySelector('header')
header.classList.add('dark')
header.classList.add('darkLogo')
let menuC = document.querySelector('header .Menu-Container')
let OPbtn = document.querySelector('header .Toggles')
let CLbtn = document.querySelector('header .Close')
OPbtn.addEventListener('click',()=>{
    menuC.classList.add('Open')
    setTimeout(() => {
        gsap.to('header ul .Menu-Link',{
            opacity:1,
            duration:.8,
            ease:'none'
        })
    }, 100);
})
CLbtn.addEventListener('click',()=>{
    gsap.to('header ul .Menu-Link',{
        opacity:0,
    })
    setTimeout(() => {
        menuC.classList.remove('Open')
    }, 100);
   
})
let searchIcon = document.querySelector('header .searchIconHeader')
let closeSearch = document.querySelector('header .CloseSearch')
let Searchs = document.querySelector('header .searchs')
let input = document.querySelector('.InputBox')
searchIcon.addEventListener('click',()=>{
    input.classList.add('OpenS')
    searchIcon.classList.add('OpenS')
    Searchs.classList.add('OpenS')

    if(searchIcon.classList.contains('OpenS')){
        let inputt = document.querySelector('header input#search')
        console.log('val',inputt.value);
        if(inputt.value == ''){
            return
             }
           else{
               console.log('val',input.value);
               setTimeout(()=>{
              window.location.href = `/search.bc?q=${inputt.value}`
               },1000)}
    }
    else{
        let inputt = document.querySelector('header input#search')
        console.log('val',inputt.value);
        if(inputt.value == ''){
            return
             }
           else{
               console.log('val',inputt.value);
               setTimeout(()=>{
              window.location.href = `/search.bc?q=${inputt.value}`
               },1000)}
    }
})

let input2 = document.querySelector('input#search2')
input2.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      if(input2.value == ''){
        return
         }
       else{
           console.log('val',input2.value);
           var url = `/loadSearch.inc?q=${input2.value}`;
           $(".loaded").load(url);}
  
  
    }
  });


let inputt = document.querySelector('header input#search')
inputt.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      if(inputt.value != ''){
        event.preventDefault();
      console.log('clicked');
  console.log('val',inputt );
  console.log('val',inputt.value);
    window.location.href = `/search.bc?q=${inputt.value}`
  setTimeout(() => {
   
  }, 1000);
      }
  
  
    }
  });
closeSearch.addEventListener('click',()=>{
    input.classList.toggle('OpenS')
    searchIcon.classList.toggle('OpenS')
    Searchs.classList.toggle('OpenS')
})

  // SEARCH
let searchIcon23 = document.querySelector('.Search-Container .searchIcon2')
searchIcon23.addEventListener('click',()=>{
  console.log('clicked');
  let input = document.querySelector('input#search2')
  if(input.value == ''){
    return
     }
   else{
       console.log('val',input.value);
       var url = `/loadSearch.inc?q=${input.value}`;
       $(".loaded").load(url);}

})
