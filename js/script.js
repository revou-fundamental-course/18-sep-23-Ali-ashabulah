var slidesIndex = 1;
fokus(slidesIndex);
function fokus(n){
    var i ;
    // alert (n);
    slidesIndex=n;
    // document.getElementById(value).focus;
    var x = document.getElementsByClassName("mySlides");
    if (n>x.length){
        slidesIndex = 1;

    }
    if (n<1){
        slidesIndex = x.length;
    }
    for (i=0; i<x.length;i++){
       if(slidesIndex!=1) {
            x[i].style.display="none";
            // x[i].setAttribute("class", "d-none");
       }
    }
    if(slidesIndex!=3) {
        x[slidesIndex-1].style.display="flex";
    }else {
        x[slidesIndex-1].style.display="block";
    }
    if(slidesIndex==1) {
        x[0].style.display="flex";
        x[1].style.display="flex";
        x[2].style.display="block";
    }
}
function send(){
    var nama = document.getElementById('nama');
    var email = document.getElementById('email');
    var minat = document.getElementById('minat');
    alert('Terimakasih ' + nama.value);
    nama.value = '';
    email.value = '';
    minat.value = '';
}