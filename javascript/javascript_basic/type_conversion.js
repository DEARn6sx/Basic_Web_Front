let age = "20"
let price = "10.50"


console.log('age = ',age)
console.log(typeof(age))

console.log('price = ',price)
console.log(typeof(price))

let age2 = parseInt('20')
console.log('String + parseInt = ',(age2))
console.log(typeof(age2))

let price2 = parseFloat('10.5')
console.log('String + parseFloat = ',price2)
console.log(typeof(price2))


let age3 = +'20'
console.log('+ String  = ',(age3))
console.log(typeof(age3))

let price3 = 10.5+""
console.log('number + = ',price3)
console.log(typeof(price3))

let price4 = 10.5.toString()
console.log('number.toString = ',price4)
console.log(typeof(price4))