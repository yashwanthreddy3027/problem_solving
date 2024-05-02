const prompt=require('prompt-sync')();
var number=prompt('enter a number: ');
n1=0;
n2=1;
fibo='';
for(i=1;i<=number;i++){
  fibo=fibo+n1+' ';
  n3=n1+n2;
  n1=n2;
  n2=n3;
}
fiboArray=fibo.split(" ");
 // finding primes
 var sum=0;
 for(num of fiboArray){
    checkPrime=true;
    if(num>1){
        for(i=2;i<num;i++){
            if(num%i==0){
                checkPrime=false;
                break;
            }
        }
        if(checkPrime){
         sum=sum+Number(num);
        }
    }
 }
 console.log(fibo);
 console.log(`sum of primes are ${sum}`);