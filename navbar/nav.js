let menu = document.querySelector(".menu")
let nav = document.querySelector(".navigation")

menu.onclick = function(){
    menu.classList.toggle("openmenu")
    if (menu.classList.contains("openmenu")){
        nav.style.display = "block";
    }else {
        nav.classList.add("animate-out");
        setTimeout(() => {
            nav.classList.remove("animate-out")
            nav.style.display = "none";
        }, 500);
    }
}