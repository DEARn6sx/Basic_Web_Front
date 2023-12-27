const a = document.getElementById('demo')
console.log(a)
const b = document.getElementsByTagName('p')
console.log(b)

function displaytext(){
    a.innerText = '<strong>wtf</strong>'
}

function displayHtml(){
    a.innerHTML = '<strong>wtf</strong>'
    a.style.color='red'
    a.style.backgroundColor='yellow'
}

const c = document.querySelector('.dear')
console.log(c)

const x = document.querySelectorAll('p')
console.log(x)

//set class
const box = document.querySelector('.box')
function displayDark(){
    box.setAttribute('class','dark')
}

function displayLight(){
    box.setAttribute('class','light')
}