var mode = document.getElementById("mode");

mode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        mode.src = "images/sun.png";
    }
    else {
        mode.src = "images/moon.png";
    }
}