
const data = [10,20,30,100,200,300]

//ดึงข้อมูลจาก array มาใช้ แล้วก็สร้าง array ก้อนใหม่ออกมา
const result = data.map(element => {
    const a = element*2
    return a
})
console.log(result);


const weather = ['rain','hot','cold']

const rsw = weather.map(element => {
    console.log(element);
    console.log(typeof(element));
    return element
})

console.log(rsw);
console.log(typeof(rsw));

const rsw2 = weather.map((element,i) => {
    return `วันที่ ${i+1} สถาพอากาศ = ${element}`
})
console.log(rsw2);

const dataobj = [{
    day: '10/06/40',
    weather: 'cold',
    temp: 15
},{
    day: '11/06/40',
    weather: 'hot',
    temp: 25
},{
    day: '12/06/40',
    weather: 'chill',
    temp: 20
}
]

console.log(dataobj);
const rswth = dataobj.map( element => {
    return element.weather
})
console.log(rswth);