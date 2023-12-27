let status_light = 5;

let light

switch (status_light) {
    case 0 : light ='ปิดไฟ';
        break;
    case 1 : light ='เปิดไฟ';
        break;
    default: light ='none'
        break;
}

console.log(light)