var arr = [];
for(i=0;i<10;i++)
{
    arr.push( Math.floor(Math.random() * 100 + 100));
  
}
function maxNumb(arr){
    LargestNumber = Math.max(...arr) 
    index = arr.indexOf(LargestNumber) 
    arr.splice(index, 1) 
    secondLargestNumber = Math.max(...arr) 
    return (secondLargestNumber)  
}
console.log(arr);
function minNumb(arr){
    SmallestNumber = Math.min(...arr) 
    index = arr.indexOf(SmallestNumber) 
    arr.splice(index, 1) 
    secondLargestNumber = Math.min(...arr) 
    return (secondLargestNumber)  
}

var max = maxNumb(arr);
var min = minNumb(arr);
console.log(max);
console.log(min)

