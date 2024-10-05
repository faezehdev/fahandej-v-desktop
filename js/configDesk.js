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
    input.classList.toggle('OpenS')
    searchIcon.classList.toggle('OpenS')
    Searchs.classList.toggle('OpenS')

    if(searchIcon.classList.contains('OpenS')){
        let inputt = document.querySelector('header input#search')
        console.log('val',inputt.value);
        if(inputt.value == ''){
            return
             }
           else{
               console.log('val',input.value);
               setTimeout(()=>{
              window.location.href = `/search.bc?q=${input.value}`
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
closeSearch.addEventListener('click',()=>{
    input.classList.toggle('OpenS')
    searchIcon.classList.toggle('OpenS')
    Searchs.classList.toggle('OpenS')
})

const host = {
    debug: false,
    settings:{
              'connection.web.trust_login': 'https://basispanel.ir/apicms', 
          'connection.web.basiscore': 'https://basispanel.ir/apicms', 
          'connection.web.media': 'https://basispanel.ir/apicms', 
          'default.dbsource.verb': 'post', 
          'default.call.verb': 'get', 
          'default.viewCommand.groupColumn': 'prpid', 
              "default.dmnid":'4876',
              "default.binding.regex":"\\{##([^#]*)##\\}"
          }
  }

  
function onSource(args) { 
    const captcha = document.querySelector("input[name='captcha']").value; 
    const captchaid = document.querySelector("input[name='captchaid']").value; 
    console.log(captcha);
    const stringJson = JSON.stringify(args.source?.rows[0]); 
    $bc.setSource('edit.object', { 
        value: stringJson, 
        captcha: captcha, 
        captchaid: captchaid ,
  
    }) 
    console.log('sourcd',stringJson);
  } 
  
  
  async function OnProcessesEditObjectFn(args) {
    const response = args.response;
  const json = await response.json();
  
  console.log(json);
  if (json.errorid == 6) {
              console.log('با موفقیت ثبت شذ');
              document.querySelector('.main-container').querySelector('span').innerHTML='پیام شما با موفقیت ثبت شد'
              document.querySelector('.main-container').classList.add('SEND')
    setTimeout(()=>{
      document.querySelector('.main-container').classList.remove('SEND')
    },2000)
            
  
  }

  if (json.errorid == 4) {
     console.log(json);
     document.querySelector('.main-container').querySelector('span').innerHTML='  کپچا اشتباه وارد شده  '
     document.querySelector('.main-container').classList.add('SEND')
setTimeout(()=>{
document.querySelector('.main-container').classList.remove('SEND')
},2000)
  }
  
  }


function rendered(){
  setTimeout(()=>{
//     let a =document.querySelectorAll('[data-bc-schema-column] [data-bc-question]')  
//     let parent = document.querySelector('[data-bc-schema-column]')
//     let child1 = document.createElement('div')
//     child1.classList.add('child-1')
//     let child2 = document.createElement('div')
//     child2.classList.add('child-2')
//     let child3 = document.createElement('div')
//     child3.classList.add('child-3')
//     let child4 = document.createElement('div')
//     child4.classList.add('child-4')
//     let child5 = document.createElement('div')
//     child5.classList.add('child-5')
//     parent.insertBefore(child1, $('[data-bc-schema-column]').children('[data-bc-question]')[0]);
//     parent.insertBefore(child2, child1);
//     parent.insertBefore(child3, child2);
//     parent.insertBefore(child4, child3);
//     parent.insertBefore(child5, child4);
//     child1.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     child1.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     child1.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     child2.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     child2.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     child2.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     child3.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     child3.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     child3.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     child4.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
//     let inputFile =document.querySelector('input[type="file"]');
//     inputFile.setAttribute('id','file-upload')
//     let label = document.createElement('label')
//     label.setAttribute('for','file-upload')
//     let p2 =  $(child4).children(0).children(0).children(1).children(0).children(0).children(1)[1]
//     let buttonF = document.querySelector('.schemaBtn')
//    p2.appendChild(label)
//    p2.insertBefore(buttonF,label)
//    let inputt =document.querySelector('[data-bc-schema-column]').children[5].querySelector('input')
//    let selectt = document.querySelector('select')
//    selectt.addEventListener('change',(r)=>{
//     inputt.value = selectt.value
//     inputt.setAttribute('value',inputt.value)
//     console.log(selectt.value);
//     console.log(inputt);

//    })
//    let isEmpty=false
//    let buttons = document.querySelector('.schemaBtn')
//   let inputs = document.querySelectorAll('.child-1 input[type="text"],.child-2 input[type="text"],.child-3 input[type="text"],.child-4 input[type="text"]')
//   buttons.addEventListener('click',()=>{
//     console.log('vkkkk');
//     inputs.forEach(input=>{
//       console.log(input.value);
//         if(input.value == ""){
//            isEmpty = true
//             console.log('فیلد را پرکنید');
//         }
//       })
//     if(isEmpty){
//       isEmpty = false
//       document.querySelector('.main-container').querySelector('span').innerHTML='  فیلدها را پرکنید '
//       document.querySelector('.main-container').classList.add('SEND')
//  setTimeout(()=>{
//  document.querySelector('.main-container').classList.remove('SEND')
//  },2000)
//     }
//   })

   console.log('rendered');

        
      },100)
 





}