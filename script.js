//accessing the elements using dom
const generateBtn=document.querySelector('.generate');
const div1=document.querySelector('.color1');
const div2=document.querySelector('.color2');
const div3=document.querySelector('.color3');
const div4=document.querySelector('.color4');
const div5=document.querySelector('.color5');

//the array of hex characters
const hexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

//Initializing all the colors
let color1='#';
let color2='#';
let color3='#';
let color4='#';
let color5='#';

//creating a function which generates and returns a random color using hex code
function generateColor(){
    let color='#';

    for(let j=0;j<=5;j++){
             color+=hexChars[Math.floor(Math.random()*hexChars.length)];
    }
    return color;
}

//creating a function which puts the created color in each of the 5 colors
function generateColors(){

        //checks if locks is false only then changes the color
        if(!locks[0]) color1=generateColor();
        if(!locks[1]) color2=generateColor();
        if(!locks[2]) color3=generateColor();
        if(!locks[3]) color4=generateColor();
        if(!locks[4]) color5=generateColor();
    
        
}

//creatinf a render function which puts all the colors on the screen
function renderColors(){
    generateColors();
    div1.style.backgroundColor=`${color1}`;
    div2.style.backgroundColor=`${color2}`;
    div3.style.backgroundColor=`${color3}`;
    div4.style.backgroundColor=`${color4}`;
    div5.style.backgroundColor=`${color5}`;

}

// running the render colors function on click of generate button
generateBtn.addEventListener('click',()=>renderColors());

//making the copy button functional
//accessing all the copy buttons
const copy1=document.querySelector('.copy1');
const copy2=document.querySelector('.copy2');
const copy3=document.querySelector('.copy3');
const copy4=document.querySelector('.copy4');
const copy5=document.querySelector('.copy5');

//accessing the copied popup
let copied=document.querySelector('.copied');

//creating the timeout id variable which stores the timeout id of the stoptimeout
let timeoutid=null;

//creating a function which makes the popup visible when we click
function copiedPopUp(){
      copied.classList.add('copied-done');
    clearTimeout(timeoutid);
     timeoutid= setTimeout(()=>{

        copied.classList.add('copied');
        copied.classList.remove('copied-done');
    },2000)
}

//adding event listener to each button so we can copy the colors individually 
copy1.addEventListener('click',()=>{
    copiedPopUp();
    navigator.clipboard.writeText(color1);
})
copy2.addEventListener('click',()=>{
    copiedPopUp();
    navigator.clipboard.writeText(color2);})

copy3.addEventListener('click',()=>{ 
    copiedPopUp();
    navigator.clipboard.writeText(color3);})

copy4.addEventListener('click',()=>{ 
    copiedPopUp();
    navigator.clipboard.writeText(color4);})

copy5.addEventListener('click',()=>{ 
    copiedPopUp();
    navigator.clipboard.writeText(color5);})


//making the lock button functional

//creating an array to store the state of locks
let locks=[false,false,false,false,false];

//accessing all the locks using dom
const lock1=document.querySelector('.lock1');
const lock2=document.querySelector('.lock2');
const lock3=document.querySelector('.lock3');
const lock4=document.querySelector('.lock4');
const lock5=document.querySelector('.lock5');

//adding functionality to all the locks
lock1.addEventListener('click',()=>{
    //acts as a switch changes lock to unlock and unlock to lock
    locks[0]=!locks[0];

    //makes ui changes to show locked and unlocked state
    lock1.classList.toggle('unlocked');
    lock1.classList.toggle('locked');
})

lock2.addEventListener('click',()=>{
    locks[1]=!locks[1];
    lock2.classList.toggle('unlocked');
    lock2.classList.toggle('locked');
})

lock3.addEventListener('click',()=>{
    locks[2]=!locks[2];
    lock3.classList.toggle('unlocked');
    lock3.classList.toggle('locked');
})

lock4.addEventListener('click',()=>{
    locks[3]=!locks[3];
    lock4.classList.toggle('unlocked');
    lock4.classList.toggle('locked');
})

lock5.addEventListener('click',()=>{
    locks[4]=!locks[4];
    lock5.classList.toggle('unlocked');
    lock5.classList.toggle('locked');
})


