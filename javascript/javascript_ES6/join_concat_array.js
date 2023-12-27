const data = [100,200,300]
console.log(data);
console.log(typeof(data));


//join
const result = data.join()
console.log(result);
console.log(typeof(result));
console.log(data);


const result2 = data.join(' ')
console.log(result2);


//concat
const data2 = [1000,2000,3000]
const alldata = data.concat(data2)
console.log(alldata);
