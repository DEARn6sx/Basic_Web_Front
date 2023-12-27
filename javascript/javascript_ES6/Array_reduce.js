
const data = [10,20,30,40]

//map
const mapData = data.map( element => {
    return 100
})

console.log(mapData);

//filter

const filterData = data.filter( element => {
    return element > 20
})
console.log(filterData);

//array.reduce((ค่าที่ถูกประมวลผล, element) => {},ค่าเริ่มต้น) // value = 0

const reduceData = data.reduce((value, element) => {
    console.log('value = ',value);
    const total = element+value
    console.log('total = ',total);
    return total
},0)
console.log(reduceData);

const cart = [
    {
        name: "backpack",
        price: 5000
    },
    {
        name: "book",
        price: 300
    },
    {
        name: 'camera',
        price: 50000
    }
]

const Sumprice = cart.reduce((value, element) =>{
    return value+element.name
},'')

console.log(Sumprice);