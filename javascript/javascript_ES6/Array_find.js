
const colors = ['red','green','blue','white','yellow']
console.log(colors);

//indexOf ค้นหาเลข index ไม่เจอจะ return -1
console.log(colors.indexOf('white'));

//หาข้อมูล
const search = colors.find(element=>element==='green')
console.log(search);


const searchindex = colors.findIndex(element=>element==='green')
console.log(searchindex);