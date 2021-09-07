var arr = [];
var arrsort = [];
for(i=0;i<10;i++)
{
    arr.push( Math.floor(Math.random() * 100 + 100));
  
}

console.log((arr.sort().slice(1,9)));




/*
function maxNumb(arr){
    firstLargestNumber = Math.max(...arr) 
    index = arr.indexOf(firstLargestNumber) 
    arr.splice(index, 1) 
    secondLargestNumber = Math.max(...arr) 
    return (secondLargestNumber)  
}

function minNumb(arr){
    firstLargestNumber = Math.min(...arr) 
    index = arr.indexOf(firstLargestNumber) 
    arr.splice(index, 1) 
    secondLargestNumber = Math.min(...arr) 
    return (secondLargestNumber)  
}

var max = maxNumb(arr);
var min = minNumb(arr);
console.log(max);
console.log(min);
*/