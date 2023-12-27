function a(){
    console.log('hoo q')
}
a() 

function message(){
    alert('hohohohohohohohho')
}

function displayname(){
    document.write('dear')
}

function plusNumber(a,b){
    console.log(a+b)
}
plusNumber('dear',1) 

function getIp(){
    return '127.0.0.1'
}
let myIp = getIp()
console.log(myIp)


function getNum(){
    return 10+10
}
let responsnum = getNum()
console.log(responsnum)


function getAddress(){
    address = 'RA'
    return address
}
console.log(getAddress())

function setSalary(salary){
    let bonus = 1000
    return salary+bonus
}
let total = setSalary(15000)
console.log(total-500)

function setName(fname,lname,age ){
    return [fname ,lname, age]
}
let setname2 = setName('dear','za',20)
console.log(setname2)
