let copy=document.querySelector('.copy');
let copied=document.querySelector('.copied');

 let timeoutid=null;
copy.addEventListener('click',()=>{
  
    copied.classList.add('copied-done');
    clearTimeout(timeoutid);
     timeoutid= setTimeout(()=>{

        copied.classList.add('copied');
        copied.classList.remove('copied-done');
    },2000)
    console.log(copied);
})
