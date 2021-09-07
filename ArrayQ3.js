
function primeFactors(n){
    var factors = [], 
        divisor = 2;
  
    while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n = n / divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }
  
  var a = primeFactors(309);
  console.log(a);

 
