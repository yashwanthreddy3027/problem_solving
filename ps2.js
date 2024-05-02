const prompt=require('prompt-sync')();
var number=prompt('enter a number: ');
product=1;
s='';
for(i=1;i<=number;i++){
  product=product*i; 
  s=s+i;
  if(i<number){
    s=s+'*';
  }
 

}
console.log(`${s}=${product}`);