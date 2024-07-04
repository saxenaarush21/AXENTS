const slides = document.querySelectorAll(".images")
const btns = document.querySelectorAll(".btn")
const activeBtn = document.querySelector(".active")
const section = document.querySelector(".slider-wraper")

// Creating the sliding effect
btns.forEach(function(btn){
        btn.addEventListener("click", function(){
            let num = btn.value;

            for (i in slides){
                slides[i].style.transform = `translateX(${num*-100}%)`;
            }
            
        });
    }
)

// Toggle active function actives & inactives a button
function toggleActive(clickedButton){
    btns.forEach(function(btn){
        if (btn === clickedButton){
            btn.classList.add("active")
        }
        else{
            btn.classList.remove("active")
        }
    });
}

// code for changing the content
const contentName = document.querySelector(".contentName h1")

btns.forEach(function(btn){
    btn.addEventListener("click", function(){

        
        
        if (btn.value == 0){
            contentName.innerHTML = "One peice"
        }
        else if (btn.value == 1){
            contentName.innerHTML = "Naruto"
        }
        else if (btn.value == 2){
            contentName.innerHTML = "DeathNote"
        }
        else if (btn.value == 3){
            contentName.innerHTML = "Demon Slayer"
        }
        else if (btn.value == 4){
            contentName.innerHTML = "Jujutsu Kaisen"
        }
        else{
            contentName.innerHTML = "Pokemon"
        }
    })
})

// function for changing radio on scroll

function checkScroll(){
    const slider = document.querySelector(".slider-wraper")
    
    const scrollable = parseFloat(slider.scrollWidth)
    const sld = Math.round(slider.scrollLeft)
    const value = Math.round(scrollable/6)

    if (sld == value*0){
        btns.forEach(function(btn){
            btn.classList.remove("active")
        })
        btns[0].classList.add("active")

        contentName.innerHTML = "One peice"
    }
    else if (sld == value*1){
        btns.forEach(function(btn){
            btn.classList.remove("active")
        })
        btns[1].classList.add("active")

        contentName.innerHTML = "Naruto"
    }
    else if (sld == value*2){
        btns.forEach(function(btn){
            btn.classList.remove("active")
        })
        btns[2].classList.add("active")

        contentName.innerHTML = "DeathNote"
    }
    else if (sld == value*3){
        btns.forEach(function(btn){
            btn.classList.remove("active")
        })
        btns[3].classList.add("active")

        contentName.innerHTML = "Demon Slayer"
    }
    else if (sld == value*4){
        btns.forEach(function(btn){
            btn.classList.remove("active")
        })
        btns[4].classList.add("active")

        contentName.innerHTML = "Jujutsu Kaisen"
    }
    else if (sld == value*5){
        btns.forEach(function(btn){
            btn.classList.remove("active")
        })
        btns[5].classList.add("active")

        contentName.innerHTML = "Pokemon"
    }
}

// 
