console.log();
let ham = document.querySelector('.ham');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');


let header = document.querySelector('header');
let nav = document.querySelector('nav');
let bg1 = document.querySelector('.bg1');
let bg2 = document.querySelector('.bg2');

let width = screen.width;
console.log(width);

let flag = 0;
ham.addEventListener(('click'),()=>{
    if ( flag == 0 ) {
        flag++;
        menu.style.color = 'rgb(34, 34, 34)';
        menu.style.display = 'none';
        close.style.display = 'block';
        close.style.color = 'rgb(34, 34, 34)';
        nav.style.display = "block";
        bg1.style.display = "block";
        bg2.style.display = "block";
        header.style.display = 'block';
        
    } else if(flag == 1)  {
        nav.style.display = 'none';
        close.style.display = 'none';
        menu.style.display = 'block';
        menu.style.color = 'rgb(207, 207, 207)';
        bg1.style.display = 'none';
        bg2.style.display = 'none';
        header.style.display = 'none';
        flag = 0;     
    }
    else if (width > '701px' ) {
        nav.style.display = 'block';
        bg1.style.display = 'none';
        bg2.style.display = 'none';
        header.style.display = 'block';


    }
});