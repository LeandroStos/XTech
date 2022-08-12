window.onload = function(){
    document.querySelector(".menuMobile, .menuMobile-2").addEventListener("click", function(){
        if(document.querySelector(".menuAtivar").style.display == 'flex'){
            document.querySelector(".menuAtivar").style.display = 'none';
        } else {
            document.querySelector(".menuAtivar").style.display = 'flex';
        }
    });
};
