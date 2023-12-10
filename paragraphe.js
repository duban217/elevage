window.onload=function(){
    var parag=document.getElementById('paragAccueil');
   
    if(window.matchMedia("(max-width:480px)").matches){
        parag.style.lineHeight='4vh',
        parag.style.color='rgb(54, 52, 53)',
        parag.style.fontWeight='100',
        parag.style.fontSize='17px',
        parag.style.marginLeft='10px';
       
    }
    else
    {
        parag.style.lineHeight='6vh',
        parag.style.color='rgb(54, 52, 53)',
        parag.style.fontWeight='100',
        parag.style.fontSize='20px',
        parag.style.marginLeft='40px';

    }
};

