//การสลายโครงสร้าง

const color = ['red','yellow', 'green']
console.log(typeof(color));
const green = color[2]
console.log(green);
console.log(typeof(green));


//destructuring array
const [a,b,c] = color
console.log(a);
console.log(b);
console.log(c);

const [,,f] = color
console.log(f); 

// object
const product = {
    pName : 'คอม',
    price : 30000,
    stock : 10
}
console.log(product);
const namep = product.pName
console.log(namep);

//destructuring object

const {pName:pName2, price:price2, stock:stock2} = product
console.log(price2);