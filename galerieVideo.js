var videos=[
    "https://www.youtube.com/embed/i008lPmVN9k",
    "https://www.youtube.com/embed/cITm_8I7GgU?si=nbVL6Nq97mc2Pz9o",
    "https://www.youtube.com/embed/lBmCPteDmqM?si=K6Gwas4bLJt7nf-g",
    "https://www.youtube.com/embed/BSnZU_94epk?si=PwiZZeDoYlPWXWOl"
];

var buttons=document.getElementsByClassName('boutonVideo');
var containerVideo=document.getElementById("containerVideo");

function pourAfficherVideo(i){
return function(){
containerVideo.innerHTML='<iframe width="320" height="200" src="'+videos[i]+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
};
}

for (var i=0;i<buttons.length;i++){
    buttons[i].onclick=pourAfficherVideo(i);
}


