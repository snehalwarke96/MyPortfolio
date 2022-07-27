var hamClick;
var crossClick;
var once;
 hamClick = document.querySelector('.hamBurger');
 crossClick = document.querySelector('.cross');
    hamClick.style.display='none';
    crossClick.style.display='none';  

setInterval(() => {
     hamClick = document.querySelector('.hamBurger');
 crossClick = document.querySelector('.cross');
    let width = screen.width;
    console.log(width);  
    if(width > 900)
{
    
    hamClick.style.display='none';
    crossClick.style.display='none';  
    if(once== true)
    {
        console.log("kasav") ;
        location.reload(); 
        once= false;
    }
    
    
}  
    else
{
     once= true;
    if(crossClick.style.display !='none'){
    console.log("kasav") ;
    hamClick.style.display='none';}
    else{
        hamClick.style.display='block';   
        console.log('snailplss');
        // document.querySelector('.showNav').classList.replace('navbar');
    }
    // crossClick.style.display='none';   
    
}  
}, 500);




 
hamClick.addEventListener('click', (element => {
    console.log("snail") ;
    document.querySelector('.showNav').classList.toggle('navbar');
     
        document.querySelector('.list').style.display='block';
        hamClick.style.display='none';
        crossClick.style.display='block';
    
}));

crossClick.addEventListener('click', (element => {
    console.log("snehal") ;
    document.querySelector('.showNav').classList.toggle('navbar');
       
        document.querySelector('.list').style.display='none';
        hamClick.style.display='block';
        crossClick.style.display='none';

}));



