//whie ไม่รู้จำนวนรอบ
// for รู้รอบ
//do whie ลองก่อนรอบ 1
let i = 1
while(i<=3){
    console.log('hi',i)
    if(i==2){
        break;
    }
    i++
}

let ii = 1
while(true){   
    if(ii==8){
        break;
    }
    console.log(ii)
    ii++
    
}

for(let j = 1 ; j <= 3 ; j++){
    if(j==2){
        break
    }
    console.log('hello',j)
}

let k = 1
do{
   
   console.log('hello world',k) 
    k++
}while( k<= 3)


for(let l = 1 ; l <= 3 ; l++){
    if(l==2){
        continue
    }
    console.log('hello555',l)
}