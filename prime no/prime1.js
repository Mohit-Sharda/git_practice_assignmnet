let a=7;
let count=0;
for(let i=0; i<=a; i++){
  if(a%i==0){
    count++;
  }
}
  if(count==2){
    console.log("prime")
  }
  else{
    console.log("not")
  }