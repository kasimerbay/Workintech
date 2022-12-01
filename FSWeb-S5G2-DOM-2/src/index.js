import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın

document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!

const ilkNavItem = document.querySelectorAll('.nav-link');
// console.log(ilkNavItem);

ilkNavItem.forEach( (items) => {
    items.addEventListener("load", (event) => {
        items.style.display = "red";
    });
})


const tumResimler = document.querySelectorAll('img');
tumResimler.forEach((resim) => {
        resim.addEventListener("dblclick", (event) => {
            resim.style.filter = "grayscale(100%)";
        })
    }   
)

tumResimler.forEach((resim) => {
    resim.addEventListener("mouseover", (event) => {
        resim.style.filter = "unset";
    })
}   
 )

tumResimler.forEach((resim) => {
    resim.addEventListener("wheel", (event) => {

        event.preventDefault();

        scale += event.deltaX * -0.01;
    
        // Restrict scale
        scale = Math.min(Math.max(.125, scale), 4);
    
        // Apply scale transform
        resim.style.transform = `scale(${scale})`;

    })
})
    
let scale = 1;

const input = document.querySelector('input');
const log = document.getElementById('log');
const tumButonlar = document.querySelectorAll('.btn');

input.addEventListener('keydown', logKey);

function logKey(e) {
    if (e.key == 1) {
        tumButonlar[0].style.background = "red";
    } else if (e.key == 2) {
        tumButonlar[1].style.background = "red";
    } else if (e.key == 3) {
        tumButonlar[2].style.background = "red";

    }
  log.textContent += ` ${e.key}`;

}

input.addEventListener('keyup', (e) => {
    if (e.key == 3) {
        input.setAttribute("disabled", "disabled");
    }
});

input.addEventListener('focus', (e) => {

        input.style.background = "red";

});

window.addEventListener('resize', (e)=>{
    log.textContent = window.innerWidth;

    if ( window.innerWidth <1000) {
        ilkNavItem.style.display = "block";
    } else {
        ilkNavItem.style.display = "none";
    }
});

