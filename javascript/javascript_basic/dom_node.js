const textAll = document.querySelectorAll('p')
console.log(textAll)
console.log(textAll[1].innerHTML)


const menu = document.getElementById('menu')

//เพิ่ม
let count = 1
function additem(){
    const add_menu = document.createElement('li')
    add_menu.innerText = 'Item' + (count++)
    menu.appendChild(add_menu)

}

//ลบ
const item = document.getElementById('item-3')
function delete_item(){
    menu.removeChild(item)
}

//แทนที่
const new_item = document.createElement('li')
new_item.innerText = 'xxxxxxxx'
menu.replaceChild(new_item,item)



//--------------------------css class----------
const box = document.getElementById('box')

function add_style(){
    box.classList.add('darkMode')
}

function remove_style(){
    box.classList.remove('darkMode')
}

let status_mode
function switch_style(){
    box.classList.toggle('darkMode')
    status_mode = box.classList.contains('darkMode')
    console.log(status_mode)
    if(status_mode){
        box.style.color='green'
    }else {box.style.color='red'}
}