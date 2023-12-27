function welcome(){
    alert('ยินดีต้อนรับงับ')
}

function hightLight(obj){
    obj.style.background = "green"
}

function unhightLight(obj){
    obj.style.background = null
}

function getMenu(){
    const menu = document.getElementById('menu')
    const display = document.getElementById('display')
    console.log(menu.value)
    display.innerText = menu.value
}


//addEventListener
const menu2 = document.getElementById('menu2')
const display2 = document.getElementById('display2')
menu2.addEventListener('change', getMenu2)
function getMenu2(){
    console.log(menu2.value)
    display2.innerText = menu2.value
}

const btn = document.getElementById('btn')
btn.addEventListener('click', showText)
function showText(){
    alert('Show Text555555')
}
const m1 = document.getElementById('m1')
const m2 = document.getElementById('m2')
m1.addEventListener('mouseover',hl2)
m1.addEventListener('mouseout',uhl2)
m2.addEventListener('mouseover',hl22)
m2.addEventListener('mouseout',uhl22)
function hl2(){
    m1.style.background = "green"
}
function uhl2(){
    m1.style.background = null
}
function hl22(){
    m2.style.background = "green"
}
function uhl22(){
    m2.style.background = null
}
