let points = [20,30,100,-1000,50,-50,-100,-10]

//เรียงลำดับจากน้อยไปมาก
points.sort(function(a,b){
    return a-b
})
console.log(points)

//มากไปน้อย
points.sort(function(a,b){
    return b-a
})
console.log(points)