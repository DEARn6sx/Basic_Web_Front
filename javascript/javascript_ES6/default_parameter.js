
function getDataCustomer(CustomerName,CustomerAddress='re'){
    const address = 
    `ชื่อลูกค้า : ${CustomerName}
    ที่อยู่ :  ${CustomerAddress}`
    return address
}

console.log(getDataCustomer('Nantawat','Roiet'));
console.log(getDataCustomer('DEAR'));