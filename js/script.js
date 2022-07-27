document.querySelector('.Cup').addEventListener('click',() => {
    document.querySelector('.detNone').classList.toggle('colgDetails');
    document.querySelector('.Cdown').classList.toggle('Cup');
    // let para = document.getElementById ('dipID');
    // if (para.style.display != 'none') {
    //     para.style.display = 'none';
    //     document.querySelector('.Dup').classList.toggle('Ddown');
    //     console.log('snail');
    // }
    //  para = document.getElementById ('schlID');
    // if (para.style.display != 'none') {
    //     para.style.display = 'none';
    //     document.querySelector('.Sup').classList.toggle('Sdown');
    //     console.log('snail');
    // }
    
});

document.querySelector('.Ddown').addEventListener('click',() => {
  

    document.querySelector('.diplomaDetails').classList.toggle('detNone');
    document.querySelector('.Dup').classList.toggle('Ddown');

    // let para = document.getElementById ('colgID');
    // if (para.style.display != 'none') {
    //     para.style.display = 'none';
    //     document.querySelector('.Cup').classList.toggle('Cdown');
    //     console.log('snail');
    // }
    //  para = document.getElementById ('schlID');
    // if (para.style.display != 'none') {
    //     para.style.display = 'none';
    //     document.querySelector('.Sup').classList.toggle('Sdown');
    //     console.log('snail');
    // }
});

document.querySelector('.Sdown').addEventListener('click',() => {
    document.querySelector('.schoolDetails').classList.toggle('detNone');
    document.querySelector('.Sup').classList.toggle('Sdown');
    console.log('snail');
    // let para = document.getElementById ('dipID');
    // if (para.style.display != 'none') {
    //     para.style.display = 'none';
    //     document.querySelector('.Dup').classList.toggle('Ddown');
    //     console.log('snail');
    // }
    //  para = document.getElementById ('colgID');
    // if (para.style.display != 'none') {
    //     para.style.display = 'none';
    //     document.querySelector('.Cup').classList.toggle('Cdown');
    //     console.log('snail');
    // }
});

