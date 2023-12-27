
function summation(x,y){
    return x+y
}
function summation(x,y,z){
    return x+y+z
}

console.log(summation(10,20))
console.log(summation(50,100,200));

//rest parameter
function rest_summation(...numberArr){
    let sum = 0
    for(let number of numberArr){
        sum += number
    }
    return sum
}
console.log(rest_summation(10,20))
console.log(rest_summation(50,100,200));
