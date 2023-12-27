
function fullname(fname, lname){
    return fname+lname
}
let x = fullname('DEAr','ZA')
console.log(x)

fullname_arrow = (fname, lname)=>fname+lname
let y = fullname_arrow('ZAA','DEAR')
console.log(y)

setAge = (age) => 'อายุ = ' +age
let age = setAge(30)
console.log(age)