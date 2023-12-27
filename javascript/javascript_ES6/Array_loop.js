const data = [1,2,3,10,20,30]

for(let i = 0 ; i < data.length ; i++){
    if(data[i] > 10 ) break
    console.log('for loop',data[i]);
}


data.forEach(element => {
    if(element > 10 ){
        console.log('cant break and continue');
    } 
    console.log('forEach',element);
});

let sum = 0
let i = 0
data.forEach(element => {
    ++i
    sum += element
    console.log(`sum ${i} = ${sum}`);
});

let j = 0
for (const element of data) {
    ++j
    if( element > 10) break
    console.log(`for of ${j} = ${element}`);
}