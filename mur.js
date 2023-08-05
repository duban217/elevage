function expandImage(n)
{
var photo=document.getElementById("photoMur"+n);
photo.style.transform="scale(1.07)";
photo.style.transition="all .2s ease-out";
var containerPhoto=document.getElementById("containerPhoto"+n);
containerPhoto.style.overflow="hidden";
}

function nonExpandImage(n)
{var photo=document.getElementById("photoMur"+n);
photo.style.transform="scale(1)";
}
