function showPrimes(n)
{
for (let i=2;i<n;i++)
{ if(!isPrime(i)) continue;
  alert(i);
}
}
function isPrime(n) {
    for(var i = 2; i<n; i++)
 {

        if(n % i === 0)
       {
            return false;
        }
else{
        return true ;
}
 }
}
showPrimes(13);