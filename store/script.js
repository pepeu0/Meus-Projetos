let prev = document.getElementById("prev");
let next = document.getElementById("next");
let item = document.querySelectorAll(".item");
let dots = document.querySelectorAll(".dot");
let numberIndicator = document.querySelector('.numbers');
let list = document.querySelector('.list');
 
 

let active = 0;
let total = item.length;
let timer;
 
let update = (direction) => {
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

if(direction > 0) {
    active++

    if(active === total) {
        active = 0
    }

item[active].classList.add('active')
dots[active].classList.add('active')

} else if (direction < 0) {
    active-- 

    if (active < 0) {
        active = total - 1
    }

item[active].classList.add('active')
dots[active].classList.add('active')
}

 
numberIndicator.textContent = "0" + (active + 1)
}

/* Para definir o timer como aleatorio : let random = Math.random() < 0.5 ? -1 : 1;*/
 
clearInterval(timer);
timer = setInterval(() => {
    update(1);
}, 5000);


 
 
prev.addEventListener('click', () => {
    update(-1)
})

next.addEventListener('click', () => {
    update(1)
})