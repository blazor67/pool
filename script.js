window.onload = function(){ 
    pslider = document.querySelector("#p");
    sslider = document.getElementById("s");
    pimg = document.getElementById("pimg");
    simg = document.getElementById("simg");

    pslider.addEventListener("input", function(){
        pimg.style.filter="hue-rotate("+pslider.value+"deg)";
    });
    
    sslider.addEventListener("input", function(){
        simg.style.filter="hue-rotate("+sslider.value+"deg)";
    });
}

/*
*/