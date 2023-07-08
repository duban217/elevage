let slideIndex=1;

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex+=n);
}

function currentSlide(n){
    showSlides(slideIndex=n);
}
function showSlides(n){
    let slides=document.getElementsByClassName("slides");
    let dots=document.getElementsByClassName("dot");

    if(n>slides.length)
    {slideIndex=1;}

    if(n<1)
    {slideIndex=slides.length;}

    // Puis on réinitialise tous les slides pour les cacher par défaut.

    for (let i=0; i<slides.length;i++)
    {
        slides[i].style.display="none";
    }

    // On retire "active" de tous les points

    for (let i=0;i<dots.length;i++)
    { dots[i].classList.remove('active');}



    //on affiche la slide demandée

    slides[slideIndex-1].style.display='block';

    //on ajoute 'active" sur le point cliqué

    dots[slideIndex-1].classList.add('active');
}
