const data = [1,2,3,10,20,30,100,200,300]
console.log(data);

//splice ตำแหน่งที่ลบ,จำนวนที่ลบ,แทรกข้อมูล
data.splice(3,3)
console.log(data);
data.splice(0,3,555)
console.log(data);


//slice ดึงสมาชิกใน array มาใช้ , ตำแหน่งสุดท้าย -1
const data2 = [1,2,3,10,20,30,100,200,300]
const dataslice = data2.slice(3,6)
console.log(data2);
console.log(dataslice);