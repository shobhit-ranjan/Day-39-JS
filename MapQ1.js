var randomno = []
for(i=0;i<5;i++){
    
   randomno.push( Math.floor((Math.random() * 6) + 1));
}
console.log(randomno);

let dict = {
    1: randomno[0],
    2: randomno[1],
    3: randomno[2],
    4: randomno[3],
    5: randomno[4]
} 

console.log(dict);
