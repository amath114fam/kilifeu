const burger=document.querySelector('.icon')
const nav=document.querySelector('.ul')
console.log(nav);

burger.addEventListener("click", ()=>{
    if(nav.style.display==='block'){
        nav.style.display='none'
    }else{
        nav.style.display='block'
    }
})