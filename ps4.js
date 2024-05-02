const prompt=require('prompt-sync')();
var number=+prompt('enter a number: ');
nearBelow=0;
for(i=(number-1);i>=2;i--){
    checkPrime=true;
    
    for(j=2;j<i;j++){
        if(i%j==0){
            checkPrime=false;
            break;
        }
    }
    if(checkPrime){
        nearBelow=i;
        break;
    }

}
nearAbove=0;
for(k=number+1;k>number;k++){
    checkPrime=true;
    for(l=2;l<k;l++){
        if(k%l==0){
         checkPrime=false;
         break;
        }
    }
    if(checkPrime){
        nearAbove=k;
        break;
    }
}

diffbelow=number-nearBelow;
diffabove=nearAbove-number;
if(diffbelow<diffabove){
    console.log(nearBelow);
}
else if(diffabove<diffbelow){
    console.log(nearAbove);
}
else{
    console.log('NULL');
}