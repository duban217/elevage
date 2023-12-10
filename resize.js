window.addEventListener("load",function (){
  var containerLogo=document.getElementById("containerLogo");
    var sousTitre=document.querySelector("h1");
    var titre=document.getElementById('titre');
    var bienvenue=document.getElementById('Bienvenue');
    var containerMurliimg=document.getElementById("containerMur li img");
    var containerMur2liimg=document.getElementById("containerMur2 li img");
    var containerMur3liimg=document.getElementById("containerMur3 li img");
     
    if (window.matchMedia("(max-width:480px)").matches)
    {
      
      titre.style.fontSize="35px";
      bienvenue.style.fontSize="35px";
      sousTitre.style.fontSize="20px";
      containerMurliimg.style.marginTop="-20px";
      containerMur2liimg.style.marginTop="-20px";
      containerMur3liimg.style.marginTop="-20px";
    }
    
}
);
  