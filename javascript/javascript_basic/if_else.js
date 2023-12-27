let score = 69;
if(score >= 80){console.log('a')}
else if(score >= 70 ){console.log('b')}
else if(score >= 60 ){console.log('c')}
else{console.log('f')}

//ternary operator
let pass = score>59 ? 'pass' : 'fail'
console.log(pass)

console.log('**************************')
let grade
if(score >= 80){
    if( score>=85 ? grade='a+': grade ='a'){
        console.log(grade)
    }
}
else if(score >= 70 ){
    score>=75 ? grade='b+': grade ='b'
        console.log(grade)
    
}
else if(score >= 60 ){
   let grade2 = score>=65 ? 'c+': 'c'
    console.log(grade2)
}
else{console.log('f')}