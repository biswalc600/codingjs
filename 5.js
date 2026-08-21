let num=456;
let larg=0;
while(num>0)
{
    let digit= num%10
    if (digit>larg){
    
  
    larg=digit;
    }
    num=Math.floor(num/10);



}
  console.log(larg);
